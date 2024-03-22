import React, { useEffect } from "react";
import $ from "jquery";
import "../styles/ManageCourses.css";
import SmallInput from "../../../Login/components/SmallInput";

export default function ManageCourses() {
  useEffect(() => {
    // jQuery code here
    $("input").focus(function () {
      $(this).parents(".form-group").addClass("focused");
    });

    $("input").blur(function () {
      var inputValue = $(this).val();
      if (inputValue === "") {
        $(this).removeClass("filled");
        $(this).parents(".form-group").removeClass("focused");
      } else {
        $(this).addClass("filled");
      }
    });
  }, []);
  return (
    <>
      <div className="manage-courses">
        <h2>Manage Your Courses</h2>
        <button
          className="cr-creator"
          onClick={() => console.log("Button clicked")}
        >
          <svg
            width="146px"
            height="146px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <title>plus</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                sketchType="MSPage"
              >
                <g
                  id="Icon-Set"
                  sketchType="MSLayerGroup"
                  transform="translate(-360.000000, -1035.000000)"
                  fill="#4361EE"
                >
                  <path
                    d="M388,1053 L378,1053 L378,1063 C378,1064.1 377.104,1065 376,1065 C374.896,1065 374,1064.1 374,1063 L374,1053 L364,1053 C362.896,1053 362,1052.1 362,1051 C362,1049.9 362.896,1049 364,1049 L374,1049 L374,1039 C374,1037.9 374.896,1037 376,1037 C377.104,1037 378,1037.9 378,1039 L378,1049 L388,1049 C389.104,1049 390,1049.9 390,1051 C390,1052.1 389.104,1053 388,1053 L388,1053 Z M388,1047 L380,1047 L380,1039 C380,1036.79 378.209,1035 376,1035 C373.791,1035 372,1036.79 372,1039 L372,1047 L364,1047 C361.791,1047 360,1048.79 360,1051 C360,1053.21 361.791,1055 364,1055 L372,1055 L372,1063 C372,1065.21 373.791,1067 376,1067 C378.209,1067 380,1065.21 380,1063 L380,1055 L388,1055 C390.209,1055 392,1053.21 392,1051 C392,1048.79 390.209,1047 388,1047 L388,1047 Z"
                    id="plus"
                    sketchType="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </button>
        <div className="input-right">
          <div className="form-group new-form-grp">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <SmallInput
              ID="email"
              Type="email"
              ClassName="full-length form-input"
            />
          </div>
          <div className="form-group new-form-grp">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <SmallInput
              ID="email"
              Type="email"
              ClassName="full-length form-input"
            />
          </div>
        </div>
      </div>
    </>
  );
}
