import { useEffect } from "react";

function Cursor(){

  useEffect(()=>{

    const cursor =
    document.querySelector(".cursor");

    window.addEventListener("mousemove",(e)=>{

      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

    });

    const hoverElements =
    document.querySelectorAll(
      "a,button,.project-card"
    );

    hoverElements.forEach((el)=>{

      el.addEventListener("mouseenter",()=>{

        cursor.style.width = "70px";
        cursor.style.height = "70px";

      });

      el.addEventListener("mouseleave",()=>{

        cursor.style.width = "18px";
        cursor.style.height = "18px";

      });

    });

  },[]);

  return (
    <div className="cursor"></div>
  );
}

export default Cursor;