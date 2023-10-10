import Project from './Project'
export default function Portfolio() {
    const myProjects = [
        {
            title: "Tech Blog",
            link: "https://enigmatic-badlands-67333-655bf991c860.herokuapp.com/"
        },
        {
            title: "RecipeBox",
            link: "https://powerful-sierra-12005-787af3607f3d.herokuapp.com/"
        },
        {
            title: "RecipeBox",
            link: "https://powerful-sierra-12005-787af3607f3d.herokuapp.com/"
        },
        {
            title: "Marvel Browser",
            link: "https://j-d-garwood.github.io/Marvel-Character-Browser/"
        },
        {
            title: "Weather Dashboard",
            link: "https://j-d-garwood.github.io/Weather-Dashboard/"
        },
        {
            title: "NoteTaker",
            link: "https://gentle-forest-87600-982310ed4a31.herokuapp.com/"
        },
        {
            title: "Web Dev Quiz",
            link: "https://j-d-garwood.github.io/04-Web-Dev_Quiz/"
        }
    ]
    console.log(myProjects[0])
    return (
        <div className="container-fluid">
            <div className='row justify-content-center'>
                <Project title={myProjects[0].title} link={myProjects[0].link}/>
                <Project title={myProjects[1].title} link={myProjects[1].link}/>
                <Project title={myProjects[2].title} link={myProjects[2].link}/>
                <Project title={myProjects[3].title} link={myProjects[3].link}/>
                <Project title={myProjects[4].title} link={myProjects[4].link}/>
                <Project title={myProjects[5].title} link={myProjects[5].link}/>
            </div>
        </div>
    )
}