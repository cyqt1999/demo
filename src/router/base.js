import classManage from '@/views/base/ClassManage';//班级管理
import modifyPassword from '@/views/base/ModifyPassword';//修改密码
import studentManage from '@/views/base/StudentManage';//学生管理
import teacherManage from '@/views/base/TeacherManage';//老师管理


export default([
    {
        path:'/classManage',
        name:'classManage',
        components:{key:classManage}
    },
    {
        path:'/modifyPassword',
        name:'modifyPassword',
        components: {key:modifyPassword}
    },
    {
        path:'/studentManage',
        name:'studentManage',
        components: {key:studentManage}
    },
    {
        path:'/teacherManage',
        name:'teacherManage',
        components: {key:teacherManage}
    }
])