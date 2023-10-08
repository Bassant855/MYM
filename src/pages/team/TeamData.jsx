import img from '../../assets/Our Team/Image.png';
import img1 from '../../assets/Our Team/Image (1).png';
import img2 from '../../assets/Our Team/Image (2).png';
import img3 from '../../assets/Our Team/Image(3).png';
// import icon from '../../assets/Our Team/icons/Icon.svg'
// import icon1 from '../../assets/Our Team/icons/Icon (1).svg'
// import icon2 from '../../assets/Our Team/icons/Icon (2).svg'
// import { Text } from '../../containers/Languages';
class Employee{
    constructor (id,profilePicture,name,name_ar,title,title_ar,section,email,facebook,linkedin,github,behance){
        this.id= id,
        this.profilePicture=profilePicture,
        this.name=name,
        this.name_ar=name_ar,
        this.title=title,
        this.title_ar=title_ar,
        this.section=section,
        this.email=email,
        this.facebook=facebook,
        this.linkedin=linkedin,
        this.github=github,
        this.behance=behance
    }
}
export const team=[
    new Employee(1,img,"Wade Warren","م","Founder","مؤسس","managers","ee","ff","ll","gg","bb"),
    new Employee(2,img1,"Maya Davies","م","Art Director (Employee)","مدير فني ( موظف )","others","ee","ff","ll","gg","bb"),
    new Employee(3,img2,"Max Mitchell","م","Brand Strategist","استراتيجي العلامة التجارية","non-technical","ee","ff","","gg","bb"),
    new Employee(4,img3,"Kara Perry","م","Graphic Designer","مصمم جرافيك","designers","ee","ff","","","bb"),
    new Employee(5,img,"Wade Warren","م","Founder","مؤسس","managers","ee","ff","","",""),
    new Employee(6,img1,"Maya Davies","م","Art Director (Employee)","مدير فني ( موظف )","others","ee","ff","ll","gg","bb"),
    new Employee(7,img2,"Max Mitchell","م","Brand Strategist","استراتيجي العلامة التجارية","non-technical","ee","ff","ll","gg",""),
    new Employee(8,img3,"Kara Perry","م","Graphic Designer","مصمم جرافيك","designers","ee","ff","ll","","bb")
];