import { supabase } from '../store/store.js'

// github 계정 연동 로그인
export async function signInWithGithub() {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: "http://localhost:5173/entvy_blog_admin/",
        },
    });
    if(error) {
        console.error('SignInWithGithub error', error, data);
    } else {
        console.log('Sign In success');
    }
}

// github 계정 상태체크
export async function checkLogin() {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session;

    if(session) {
        return session;
    } else {
        console.log('session null');
    }
}

// github 계정 연동 로그아웃
export async function signOut() {
    const { error } = await supabase.auth.signOut();
    if(error) {
        console.error('LogOut Error', error.message);
    } else {
        checkLogin();
    }
}

//  supabase DB Get
export async function getData(setData, dbTable, columnName, value) {
    let query = supabase.from(dbTable).select();
    if(columnName && value) {
        query = query.eq(columnName, value);
    }
    const { data, error } = await query;

    if(error) {
        console.error('SELECT Error', error);
    } else {
        setData(data);
    }
}

// supabase DB Insert
export async function InsertSubmit(insertData, dbTable) {
    const { data, error } = await supabase.from(dbTable).insert([
        insertData
    ]);
    if(error) {
        console.error('INSERT Error', error, data);
    } else {
        console.log('Insert Success' , data);
    }
}
// supabase DB Modify(Update)
export async function ModifyPost(updateData, dbTable) {
    const { data, error } = await supabase.from(dbTable).update(updateData).eq('id', updateData.id);
    if(error) {
        console.error('Update Error', error, data);
    } else {
        console.log('Update Success' , data);
    }
}


//  supabase DB Delete
export async function deletePost(id, dbTable) {
    const { data, error } = await supabase.from(dbTable).delete().eq("id", id);
    if(error) {
        console.error('Delete Error', error, data)
    } else {
        console.log('Delete success');
        // 삭제 후 새로고침
        window.location.reload();
    }
}

// 날짜 시간 필더링 (2025-08-04 오후 2:14:00)
export function DateFilter(date) {
    return new Date(date).toLocaleDateString('ko-KR', 
                {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                }) + ' ' + new Date(date).toLocaleTimeString('ko-KR',
                {
                    hour: "numeric", 
                    minute: "numeric", 
                    second: "numeric"
                });
}