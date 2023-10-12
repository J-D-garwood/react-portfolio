import Project from './Project'
import techblog from "../../../public/image_of_deployed.png";
import recipebox from "../../../public/logo.png"
import marvel from '../../../public/marvel.jpg'
import weather from "../../../public/Deployed.png"
import note from "../../../public/Deployed_1.png"
import quiz from "../../../public/quiz.png"
/*portfolio me page*/

export default function Portfolio() {
    const myProjects = [
        {
            title: "Tech Blog",
            link: "https://enigmatic-badlands-67333-655bf991c860.herokuapp.com/",
            im_path: techblog,
            github: "https://github.com/J-D-garwood/recipe-forum"
        },
        {
            title: "RecipeBox",
            link: "https://powerful-sierra-12005-787af3607f3d.herokuapp.com/",
            im_path: recipebox,
            github: "https://github.com/J-D-garwood/recipe-forum"
        },
        {
            title: "Marvel Browser",
            link: "https://j-d-garwood.github.io/Marvel-Character-Browser/",
            im_path: marvel,
            github: "https://github.com/J-D-garwood/Marvel-Character-Browser"
        },
        {
            title: "Weather Dashboard",
            link: "https://j-d-garwood.github.io/Weather-Dashboard/",
            im_path: weather,
            github: "https://github.com/J-D-garwood/Weather-Dashboard"
        },
        {
            title: "NoteTaker",
            link: "https://gentle-forest-87600-982310ed4a31.herokuapp.com/",
            im_path: note,
            github: "https://github.com/J-D-garwood/NoteTaker-expressjs"
        },
        {
            title: "Web Dev Quiz",
            link: "https://j-d-garwood.github.io/04-Web-Dev_Quiz/",
            im_path: quiz,
            github: "https://github.com/J-D-garwood/04-Web-Dev_Quiz/"
        }
    ]
    return (
        <div className="container-fluid">
            <div className='row justify-content-center'>
                <Project title={myProjects[0].title} link={myProjects[0].link} im_path={myProjects[0].im_path} github={myProjects[0].github}/>
                <Project title={myProjects[1].title} link={myProjects[1].link} im_path={myProjects[1].im_path} github={myProjects[1].github}/>
                <Project title={myProjects[2].title} link={myProjects[2].link} im_path={myProjects[2].im_path} github={myProjects[2].github}/>
                <Project title={myProjects[3].title} link={myProjects[3].link} im_path={myProjects[3].im_path} github={myProjects[3].github}/>
                <Project title={myProjects[4].title} link={myProjects[4].link} im_path={myProjects[4].im_path} github={myProjects[4].github}/>
                <Project title={myProjects[5].title} link={myProjects[5].link} im_path={myProjects[5].im_path} github={myProjects[5].github}/>
            </div>
        </div>
    )
}