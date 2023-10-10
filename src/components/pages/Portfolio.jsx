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
    return (
        <div className="container-fluid">
            <div className='row justify-content-center'>
                <Project projects={myProjects[0]}/>
                <Project projects={myProjects[1]}/>
                <Project projects={myProjects[2]}/>
                <Project projects={myProjects[3]}/>
                <Project projects={myProjects[4]}/>
                <Project projects={myProjects[5]}/>
            </div>
        </div>
    )
}