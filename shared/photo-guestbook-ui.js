// Photography UI adapter. Authentication and permissions use the main Supabase project.
let currentUser = null;
let photoSessionUser = null;
let photoAdmin = false;
let isAdminMode = false;
let photoApi = null;
let photoAuthVersion = 0;
let photoLoading = false;
const photoReady = new Promise(resolve => {
    if (location.protocol === 'file:') { resolve(null); return; }
    const ready = () => resolve(window.RoyPhotoClient || null);
    if (window.RoyPhotoClient) ready();
    else window.addEventListener('roy-photo-ready', ready, {once:true});
});
const photoMessageColumns = 'id,user_id,name,message,theme,private,pinned,likes,date,time,city,weather,temp,created_at';
const photoReplyColumns = 'id,message_id,user_id,name,message,private,reply_to,date,time,created_at';
function photoFailure(error) {
    if (error?.code === 'otp_expired') return '验证码无效或过期，请重新获取';
    if (error?.code === '23505') return '昵称已经设置，请刷新后重试';
    if (['P0001','over_email_send_rate_limit','over_request_rate_limit'].includes(error?.code)) return '操作太频繁，请稍后重试';
    if (error?.code === '42501') return '请验证邮箱登录，并确认账号具有操作权限';
    return '暂时无法完成操作，请稍后重试';
}
async function photoClient() {
    photoApi = await photoReady;
    if (!photoApi) throw new Error('Open this page using HTTP/HTTPS');
    return photoApi;
}
async function photoRows(table, columns, customize = query => query) {
    const api = await photoClient(); const rows = [];
    for (let offset = 0; ; offset += 200) {
        const {data,error} = await customize(api.from(table).select(columns)).range(offset,offset+199).abortSignal(AbortSignal.timeout(15000));
        if (error) throw error;
        rows.push(...data);
        if (data.length < 200) break;
    }
    return rows;
}
async function refreshPhotoUser(user) {
    const version = ++photoAuthVersion;
    if (photoSessionUser?.id !== user?.id) {
        isAdminMode = false; currentUser = null; messages = []; nameFilter = null;
        if (currentModalMsgId) closeMessageModal();
    }
    photoSessionUser = user; photoAdmin = false;
    updateLoginUI(); renderMessages();
    if (user) {
        try {
            const api = await photoClient();
            const [{data:profile,error},{data:admin,error:adminError}] = await Promise.all([
                api.from('roy_top_profiles').select('nickname').eq('user_id',user.id).maybeSingle(),
                api.rpc('roy_site_is_admin')
            ]);
            if (error || adminError) throw error || adminError;
            if (version !== photoAuthVersion) return;
            currentUser = profile?.nickname || null; photoAdmin = admin === true;
        } catch(error) { if(version===photoAuthVersion) showToast(photoFailure(error)); }
    }
    if (version !== photoAuthVersion) return;
    if (!photoAdmin) isAdminMode = false;
    updateLoginUI();
    await loadMessagesFromDB();
}
async function loadUser() {
    try {
        const api = await photoClient();
        api.auth.onAuthStateChange((_event,session) => {setTimeout(() => void refreshPhotoUser(session?.user || null),0);});
        const {data,error} = await api.auth.getSession();
        if(error) throw error;
        await refreshPhotoUser(data.session?.user || null);
    } catch(error) { showToast(location.protocol==='file:' ? '请通过网站地址打开页面后登录' : photoFailure(error)); }
}
function updateLoginUI() {
    const indicator = document.getElementById('loginIndicator');
    indicator.textContent = currentUser || (photoSessionUser ? '设置昵称' : '');
    indicator.classList.toggle('hidden',!photoSessionUser);
    const input = document.getElementById('visitorName');
    input.value = currentUser || ''; input.readOnly = true;
    input.placeholder = photoSessionUser ? '请先设置账号昵称' : '请点击左上角登录';
    const reply = document.getElementById('modalReplyName');
    reply.value = currentUser || ''; reply.readOnly = true;
    const label = document.getElementById('adminBtnLabel');
    label.textContent = isAdminMode ? 'ROYZHAO ✓' : 'ROYZHAO';
    syncPhotoLoginForm();
}
function syncPhotoLoginForm(){
    const account=document.getElementById('photoAccountAuth');
    const setup=!!photoSessionUser&&!account.hidden;
    document.getElementById('photoProfileForm').hidden=!photoSessionUser||!!currentUser||setup;
    document.getElementById('loginTitle').textContent=setup?'设置账号密码':photoSessionUser&&!currentUser?'设置账号昵称，保存后固定使用':'邮箱登录';
    if(photoSessionUser&&currentUser&&account.hidden&&!document.getElementById('loginModal').classList.contains('hidden'))closeLoginModal();
}
function openLoginModal() {
    const account=document.getElementById('photoAccountAuth');
    if(currentUser&&account.hidden){if(confirm('当前登录为: '+currentUser+'\n\n确定要退出登录吗？'))void logout();return;}
    syncPhotoLoginForm();
    const modal=document.getElementById('loginModal');modal.classList.remove('hidden');
    setTimeout(()=>modal.classList.remove('opacity-0'),10);
    (document.querySelector('#photoAccountAuth [data-set-password]:not([hidden]) input, #photoAccountAuth [data-credentials]:not([hidden]) input, #photoAccountAuth [data-verify]:not([hidden]) input')||document.getElementById('loginNickname')).focus();
}
function closeLoginModal(){const modal=document.getElementById('loginModal');modal.classList.add('opacity-0');setTimeout(()=>modal.classList.add('hidden'),300);}
async function doLogin(){
    if(!photoSessionUser||currentUser)return;
    const button=document.getElementById('loginSubmitBtn');if(button.disabled)return;button.disabled=true;
    try{
        const nickname=document.getElementById('loginNickname').value.trim();
        if(!nickname||nickname.length>40){showToast('请输入 1～40 字的账号昵称');return;}
        const api=await photoClient();const {error}=await api.from('roy_top_profiles').insert({user_id:photoSessionUser.id,nickname});if(error)throw error;
        await refreshPhotoUser(photoSessionUser);closeLoginModal();showToast('你好，'+currentUser+' 👋');
    }catch(error){showToast(photoFailure(error));}finally{button.disabled=false;}
}
const photoAccountElement=document.getElementById('photoAccountAuth');
new MutationObserver(()=>syncPhotoLoginForm()).observe(photoAccountElement,{attributes:true,attributeFilter:['hidden','data-mode']});
photoAccountElement.addEventListener('roy-auth-complete',async event=>{
    await refreshPhotoUser(event.detail.user);syncPhotoLoginForm();
    if(currentUser){closeLoginModal();showToast('你好，'+currentUser+' 👋');}else document.getElementById('loginNickname').focus();
});
async function logout() {
    try{const api=await photoClient();const {error}=await api.auth.signOut({scope:'local'});if(error)throw error;
    await refreshPhotoUser(null);showToast('已退出登录');}catch(error){showToast(photoFailure(error));}
}
async function loadMessagesFromDB() {
    if(photoLoading)return;photoLoading=true;
    const version=photoAuthVersion;
    try {
        const rows=await photoRows('roy_photo_messages',photoMessageColumns,q=>q.order('created_at',{ascending:false}).order('id'));
        const replyRows=await photoRows('roy_photo_replies','message_id');
        if(version!==photoAuthVersion)return;
        const counts=new Map();for(const r of replyRows)counts.set(r.message_id,(counts.get(r.message_id)||0)+1);
        messages=rows.map(row=>({...row,date:escapeHtml(row.date),time:escapeHtml(row.time),city:escapeHtml(row.city),weather:escapeHtml(row.weather),userId:row.user_id,createdAt:Date.parse(row.created_at),replyCount:counts.get(row.id)||0,developing:Date.now()-Date.parse(row.created_at)<4000}));
        renderMessages();
    }catch(error){showToast(photoFailure(error));}finally{photoLoading=false;}
}
function initGuestbook(){void loadMessagesFromDB();setInterval(()=>{if(!document.hidden)void loadMessagesFromDB();},5000);}
function getFilteredMessages(){
    let result=messages.filter(m=>!m.private||m.userId===photoSessionUser?.id);
    if(nameFilter)result=result.filter(m=>m.name===nameFilter);
    return [...result.filter(m=>m.pinned),...result.filter(m=>!m.pinned)];
}
async function handleGuestbookSubmit(event){
    event.preventDefault();
    if(!currentUser||!photoSessionUser){openLoginModal();return;}
    const body=document.getElementById('visitorMessage');const text=body.value.trim();
    if(!text||text.length>6000){showToast('留言需要 1～6000 字');return;}
    const button=document.querySelector('#guestbookForm button[type="submit"]');if(button.disabled)return;button.disabled=true;
    const userId=photoSessionUser.id;
    try{
        const api=await photoClient();
        const weather=await fetchWeatherInfo();
        if(photoSessionUser?.id!==userId)throw new Error('Session changed');
        const {error}=await api.from('roy_photo_messages').insert({user_id:userId,message:text,theme:document.querySelector('input[name="noteTheme"]:checked').value,private:!document.getElementById('visitorPrivate').checked,city:weather.city||'',weather:weather.weather||'',temp:weather.temp});
        if(error)throw error;body.value='';document.getElementById('visitorPrivate').checked=true;
        await loadMessagesFromDB();showToast(t('toast.sent'));
    }catch(error){showToast(photoFailure(error));}finally{button.disabled=false;}
}
function getLikedMessages(){try{return JSON.parse(localStorage.getItem('roy_photo_liked_'+(photoSessionUser?.id||'anon'))||'[]');}catch{return [];}}
async function toggleLike(msgId){
    if(!photoSessionUser||!currentUser){openLoginModal();return;}
    try{const api=await photoClient();const {data,error}=await api.rpc('roy_photo_like',{target_id:msgId});if(error)throw error;
    const liked=getLikedMessages();if(!liked.includes(msgId))liked.push(msgId);
    localStorage.setItem('roy_photo_liked_'+photoSessionUser.id,JSON.stringify(liked));
    const msg=messages.find(m=>m.id===msgId);if(msg)msg.likes=data;renderMessages();}catch(error){showToast(photoFailure(error));}
}
async function deleteOwnMessage(msgId){
    const msg=messages.find(m=>m.id===msgId);
    if(!msg||!photoSessionUser||!(msg.userId===photoSessionUser.id||(photoAdmin&&isAdminMode)))return;
    if(!confirm('确定删除这条留言吗？'))return;
    try{const api=await photoClient();const {error}=await api.rpc('roy_photo_manage',{target_id:msgId,action:'delete'});if(error)throw error;
    closeMessageModal();await loadMessagesFromDB();showToast('留言已删除');}catch(error){showToast(photoFailure(error));}
}
async function togglePin(msgId){
    const msg=messages.find(m=>m.id===msgId);if(!msg||!photoAdmin||!isAdminMode)return;
    try{const api=await photoClient();const {error}=await api.rpc('roy_photo_manage',{target_id:msgId,action:'pin',value:!msg.pinned});if(error)throw error;
    closeMessageModal();await loadMessagesFromDB();showToast(msg.pinned?'已取消置顶':'已置顶 📌');}catch(error){showToast(photoFailure(error));}
}
async function loadReplies(msgId){
    const container=document.getElementById('modalReplies');container.innerHTML='<div class="text-center text-white/40 text-xs py-2">加载回复...</div>';
    try{
        const rows=await photoRows('roy_photo_replies',photoReplyColumns,q=>q.eq('message_id',msgId).order('created_at').order('id'));
        if(currentModalMsgId!==msgId)return;
        const parent=messages.find(m=>m.id===msgId);
        const visible=rows.filter(r=>!r.private||(photoAdmin&&isAdminMode)||r.user_id===photoSessionUser?.id||parent?.userId===photoSessionUser?.id);
        container.replaceChildren();
        for(const d of visible){const div=document.createElement('div');div.className='bg-white/10 backdrop-blur p-4 rounded-sm border border-white/10 text-white';
        div.innerHTML=`<div class="flex justify-between items-start mb-2"><span class="text-sm font-semibold">${escapeHtml(d.name)}${d.private?' <span class="text-[10px] text-white/40">🔒 彼此</span>':''}</span><span class="text-[10px] text-white/50 font-mono">${escapeHtml(d.date)} ${escapeHtml(d.time)}</span></div><p class="text-sm leading-relaxed whitespace-pre-wrap text-white/80">${escapeHtml(d.message)}</p>`;container.appendChild(div);}
        if(!visible.length)container.innerHTML='<div class="text-center text-white/30 text-xs py-4">暂无回复，来说点什么吧</div>';
    }catch(error){container.innerHTML='<div class="text-center text-white/30 text-xs py-4">加载失败，请稍后重试</div>';}
}
async function submitModalReply(){
    if(!currentModalMsgId)return;
    if(!currentUser||!photoSessionUser){closeMessageModal();openLoginModal();return;}
    const body=document.getElementById('modalReplyMsg');const text=body.value.trim();if(!text||text.length>6000)return;
    const button=document.querySelector('#modalReplyForm button');if(button.disabled)return;button.disabled=true;
    const target=currentModalMsgId;
    try{const api=await photoClient();const {error}=await api.from('roy_photo_replies').insert({message_id:target,user_id:photoSessionUser.id,message:text,private:!document.getElementById('modalReplyPublic').checked});if(error)throw error;
    body.value='';document.getElementById('modalReplyPublic').checked=true;await loadMessagesFromDB();if(currentModalMsgId===target)await loadReplies(target);
    }catch(error){showToast(photoFailure(error));}finally{button.disabled=false;}
}
async function toggleAdmin(){
    if(!photoSessionUser||!currentUser){openLoginModal();return;}
    try{const api=await photoClient();const {data,error}=await api.rpc('roy_site_is_admin');if(error)throw error;photoAdmin=data===true;
    if(!photoAdmin){isAdminMode=false;updateLoginUI();showToast('此账号没有管理员权限');return;}
    isAdminMode=!isAdminMode;currentPage=1;updateLoginUI();await loadMessagesFromDB();
    if(currentModalMsgId)closeMessageModal();showToast(isAdminMode?'管理模式已开启，显示所有留言':'管理模式已关闭');
    }catch(error){showToast(photoFailure(error));}
}
async function clearMessages(){
    if(!photoAdmin||!isAdminMode)return;
    if(!confirm('确定清空留言簿吗？留言会移入数据库回收区。'))return;
    try{const api=await photoClient();const {error}=await api.rpc('roy_photo_clear');if(error)throw error;await loadMessagesFromDB();showToast(t('toast.cleared'));}catch(error){showToast(photoFailure(error));}
}
