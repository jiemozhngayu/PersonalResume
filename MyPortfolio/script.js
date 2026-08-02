/*
====================================
 Personal Resume Website
 JavaScript
 Version: 1.0
====================================
*/


// ================================
// 网站初始化
// ================================


document.addEventListener(
    "DOMContentLoaded",
    function(){

        console.log(
            "个人简历网站加载完成"
        );


        initNavigation();

        initTyping();

        initSkillAnimation();

        initScrollAnimation();

        initTheme();

        initBackTop();

        initImagePreview();

        initForm();

        initProjectSlider();

        initLoading();


    }
);




// ================================
// 1. 导航栏平滑滚动
// ================================


function initNavigation(){


    const links =
    document.querySelectorAll(
        "nav a"
    );


    links.forEach(
        link=>{


            link.addEventListener(
                "click",
                function(e){


                    e.preventDefault();


                    const target =
                    document.querySelector(
                        this.getAttribute("href")
                    );


                    if(target){


                        target.scrollIntoView({

                            behavior:"smooth"

                        });


                    }


                }
            );


        }
    );


}



// ================================
// 2. 当前导航高亮
// ================================


window.addEventListener(
    "scroll",
    function(){


        const sections =
        document.querySelectorAll(
            "section"
        );


        const links =
        document.querySelectorAll(
            "nav a"
        );


        let current="";


        sections.forEach(
            section=>{


                const top =
                section.offsetTop;


                if(
                    scrollY >= top-200
                ){

                    current =
                    section.id;

                }


            }
        );



        links.forEach(
            link=>{


                link.classList.remove(
                    "active"
                );


                if(
                    link.getAttribute("href")
                    === "#"+current
                ){

                    link.classList.add(
                        "active"
                    );

                }


            }
        );


    }
);




// ================================
// 3. 打字机效果
// ================================


function initTyping(){


    const element =
    document.querySelector(
        "#typing"
    );


    if(!element)
    return;



    const text =
    "你好，我是一名前端开发工程师";


    let index=0;


    function type(){


        if(index < text.length){


            element.innerHTML +=
            text[index];


            index++;


            setTimeout(
                type,
                150
            );


        }


    }


    type();


}





// ================================
// 4. 技能条动画
// ================================


function initSkillAnimation(){


    const skills =
    document.querySelectorAll(
        ".progress"
    );



    skills.forEach(
        skill=>{


            const percent =
            skill.dataset.percent;



            skill.style.width =
            "0%";



            setTimeout(
                ()=>{


                    skill.style.width =
                    percent+"%";


                },
                500
            );


        }
    );


}




// ================================
// 5. 滚动动画
// ================================


function initScrollAnimation(){


    const elements =
    document.querySelectorAll(
        ".animate"
    );



    function check(){


        elements.forEach(
            item=>{


                const position =
                item.getBoundingClientRect()
                .top;



                if(
                    position <
                    window.innerHeight-100
                ){


                    item.classList.add(
                        "show"
                    );


                }


            }
        );


    }



    window.addEventListener(
        "scroll",
        check
    );


    check();


}




// ================================
// 6. 深色模式
// ================================


function initTheme(){


    const button =
    document.querySelector(
        "#theme"
    );


    if(!button)
    return;



    button.onclick=function(){


        document.body
        .classList.toggle(
            "dark"
        );



        if(
            document.body
            .classList.contains(
                "dark"
            )
        ){

            localStorage.setItem(
                "theme",
                "dark"
            );


        }
        else{


            localStorage.setItem(
                "theme",
                "light"
            );


        }


    };



    const saved =
    localStorage.getItem(
        "theme"
    );



    if(saved==="dark"){


        document.body
        .classList.add(
            "dark"
        );


    }


}





// ================================
// 7. 返回顶部
// ================================


function initBackTop(){


    const btn =
    document.querySelector(
        "#top"
    );



    if(!btn)
    return;



    window.addEventListener(
        "scroll",
        ()=>{


            if(
                scrollY>500
            ){

                btn.style.display =
                "block";


            }
            else{


                btn.style.display =
                "none";


            }


        }
    );



    btn.onclick=function(){


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    };


}




// ================================
// 8. 图片放大
// ================================


function initImagePreview(){


    const images =
    document.querySelectorAll(
        "img"
    );



    images.forEach(
        img=>{


            img.onclick=function(){


                this.classList.toggle(
                    "zoom"
                );


            };


        }
    );


}





// ================================
// 9. 简历下载
// ================================


function initDownload(){


    const download =
    document.querySelector(
        "#download"
    );



    if(!download)
    return;



    download.onclick=function(){


        alert(
            "正在下载个人简历PDF"
        );


    };


}




// ================================
// 10. 联系表单验证
// ================================


function initForm(){


    const form =
    document.querySelector(
        "#contact"
    );



    if(!form)
    return;



    form.addEventListener(
        "submit",
        function(e){


            e.preventDefault();



            const name =
            document.querySelector(
                "#name"
            ).value;



            const email =
            document.querySelector(
                "#email"
            ).value;



            if(name===""){


                alert(
                    "请输入姓名"
                );


                return;


            }




            if(
                !email.includes("@")
            ){


                alert(
                    "请输入正确邮箱"
                );


                return;


            }



            alert(
                "提交成功，谢谢!"
            );



            form.reset();



        }
    );


}





// ================================
// 11. 项目图片轮播
// ================================


function initProjectSlider(){


    const images =
    document.querySelectorAll(
        ".project-img"
    );



    let index=0;



    if(images.length===0)
    return;



    setInterval(
        ()=>{


            images.forEach(
                img=>{

                    img.style.display =
                    "none";

                }
            );



            images[index]
            .style.display =
            "block";



            index++;



            if(
                index>=images.length
            ){

                index=0;

            }



        },
        3000
    );



}





// ================================
// 12. 页面加载动画
// ================================


function initLoading(){


    const loader =
    document.querySelector(
        ".loader"
    );



    if(!loader)
    return;



    window.onload=function(){


        loader.style.opacity =
        "0";



        setTimeout(
            ()=>{


                loader.style.display =
                "none";


            },
            500
        );


    };


}




// ================================
// 13. 鼠标滚动进度条
// ================================


window.addEventListener(
    "scroll",
()=>{


    const height =
    document.documentElement
    .scrollHeight -
    document.documentElement
    .clientHeight;



    const progress =
    (
        scrollY /
        height
    )*100;



    const bar =
    document.querySelector(
        ".scroll-progress"
    );



    if(bar){


        bar.style.width =
        progress+"%";


    }


});





// ================================
// 14. 页面时间显示
// ================================


function showTime(){


    const time =
    document.querySelector(
        "#time"
    );



    if(!time)
    return;



    let date =
    new Date();



    time.innerHTML =
    date.toLocaleDateString();


}



showTime();





// ================================
// End
// ================================

console.log(
    "JavaScript模块加载完成"
);
// ================================
// 手机菜单
// ================================


function initMobileMenu(){


const menu =
document.querySelector(
"#menu"
);


const nav =
document.querySelector(
"nav"
);



if(!menu)
return;



menu.onclick=function(){


nav.classList.toggle(
"show"
);


};


}

