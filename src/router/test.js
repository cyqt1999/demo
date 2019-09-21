import makeTestPaper from '@/views/test/MakeTestPaper';//安排测试
import testPaperManage from '@/views/test/TestPaperManage';//试卷管理
import viewTestPaper from '@/views/test/ViewTestPaper';//老师出卷
import testResult from '@/views/test/TestResult';//测试成绩

export default([

    {
        path:'/makeTestPaper',
        name:'makeTestPaper',
        components:{key:makeTestPaper}
    },
    {
        path:'/testPaperManage',
        name:'testPaperManage',
        components:{key:testPaperManage}
    },
    {
        path:'/viewTestPaper',
        name:'viewTestPaper',
        components:{key:viewTestPaper}
    },
    {
        path:'/testResult',
        name:'testResult',
        components:{key:testResult}
    }

])