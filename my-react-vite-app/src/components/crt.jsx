import React, { useRef } from 'react';
import './css/crt.css';


const DeliveryInfo = () => {
    const categoryContainerRef = useRef(null);

    const scrollLeft = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoryContainerRef.current) {
            categoryContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };
    return (
        <div className='landingPage2'>
        <div id="delivery-info">
        <div class="mainTile">
        <div class="categoryBox">
            <div class="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                     <g id="Mask_Group_108" data-name="Mask Group 108" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0"><g id="grocery_1_" data-name="grocery (1)" transform="translate(1.335 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0"><path id="Path_68053" data-name="Path 68053" d="M37.55,7.51,38.818,7.1l1.3,4-1.268.412Zm0,0" transform="translate(-6.897 -1.303)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.0"></path><path id="Path_68054" data-name="Path 68054" d="M35.156,13.227l1.268-.413,1.3,4-1.268.413Zm0,0" transform="translate(-6.457 -2.354)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.1"></path><path id="Path_68055" data-name="Path 68055" d="M7.167,12.818a3.633,3.633,0,0,0,.819,2.836l.963,1.207V28h1.333V17.913l.963.642a.667.667,0,0,0,.74,0l1.63-1.088,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.333.889V38.666H12.282V40H30.948a3.337,3.337,0,0,0,3.333-3.333v-20a.661.661,0,0,0-.143-.4L37.991,6.007a4.49,4.49,0,0,0-.508-4.133A4.26,4.26,0,0,0,33.942,0a4.365,4.365,0,0,0-4.049,2.841L28.848,5.623,27.615,4.391V2a.667.667,0,0,0-.667-.667H19.615A.667.667,0,0,0,18.948,2V3.144a2.082,2.082,0,0,0-2.689-.091V2a1.976,1.976,0,0,0-3.952,0V3.053A2.041,2.041,0,0,0,9.548,3.2a2.112,2.112,0,0,0-.011,2.93l.621.641a2.042,2.042,0,0,0-.605.424l0,0-.007.007a2.053,2.053,0,0,0-.38.544l-.76-1.4-1.173.635,1.724,3.182c-.077.044-.155.087-.228.137-.027.019-.051.04-.078.059L6.067,7.982l-.9.98,2.562,2.363a3.637,3.637,0,0,0-.559,1.493Zm14.078,3.294L19.615,17.2l-1.63-1.087a.667.667,0,0,0-.74,0L15.63,17.19c0-.067-.015-.125-.015-.189a2.992,2.992,0,0,1,5.824-.974.674.674,0,0,0-.194.085Zm1.7.643-.013-.008A4.327,4.327,0,0,0,16.948,13V8.667h6Zm10,19.912a2,2,0,0,1-2,2H28.282V18.357l1.333-.89,1.63,1.087a.667.667,0,0,0,.74,0l.963-.641ZM31.141,3.309a3.026,3.026,0,0,1,2.8-1.976,2.943,2.943,0,0,1,2.445,1.3,3.158,3.158,0,0,1,.356,2.909l-4.128,11-1,.667-1.63-1.087a.667.667,0,0,0-.74,0L27.615,17.2l-1.353-.9ZM28.333,6.994l-3.538,9.418-.513.342V8.276l2.667-2.667ZM20.282,2.667h6V4h-6Zm-.391,2.667h5.448l-2,2H17.891ZM10.5,4.137a.71.71,0,0,1,1.02,0l.979,1a.667.667,0,0,0,1.143-.471V2a.643.643,0,1,1,1.285,0V4.667a.667.667,0,0,0,1.142.467l.982-1a.722.722,0,0,1,1.013,0,.763.763,0,0,1,0,1.066L16.1,7.2l.02.02-.309.309a.662.662,0,0,0-.129.19c-.009.021-.015.041-.022.063a.667.667,0,0,0-.036.176c0,.015-.008.027-.008.041V13.88a4.27,4.27,0,0,0-.421.467l-1.259-2.68A3.6,3.6,0,0,0,11.628,9.8a3.514,3.514,0,0,0-.713-.108l-.171-.2c-.133-.153-.234-.272-.25-.288a.772.772,0,0,1-.2-.678.74.74,0,0,1,.185-.372l.012-.011.017-.018a.715.715,0,0,1,.9-.084.667.667,0,0,0,.852-1.015L10.495,5.206a.77.77,0,0,1,0-1.069ZM8.488,13a2.294,2.294,0,0,1,.984-1.591,2.249,2.249,0,0,1,3.267.847l1.7,3.619a4.271,4.271,0,0,0-.1.474l-.351-.235a.667.667,0,0,0-.74,0L11.615,17.2l-1.479-.987-.143-.179,1.719-1.329L10.9,13.651l-1.733,1.34-.148-.185A2.309,2.309,0,0,1,8.488,13Zm0,0" transform="translate(-0.948 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.2"></path><path id="Path_68056" data-name="Path 68056" d="M1.423,44.337A2.991,2.991,0,0,0,4.114,46a3.029,3.029,0,0,0,1.345-.317L6,45.412l.541.27A3.026,3.026,0,0,0,7.886,46a2.992,2.992,0,0,0,2.691-1.663l.232-.466A11.342,11.342,0,0,0,12,38.829a3.482,3.482,0,0,0-5.333-2.962v-.533A2.667,2.667,0,0,0,4,32.667V34a1.333,1.333,0,0,1,1.333,1.333v.533A3.482,3.482,0,0,0,0,38.829a11.339,11.339,0,0,0,1.191,5.043ZM3.5,36.667a2.147,2.147,0,0,1,1.529.633l.5.5a.667.667,0,0,0,.943,0l.5-.5a2.162,2.162,0,0,1,3.691,1.529,9.986,9.986,0,0,1-1.05,4.447l-.232.467a1.667,1.667,0,0,1-1.5.924,1.684,1.684,0,0,1-.749-.177L6.3,44.07a.667.667,0,0,0-.6,0l-.839.42a1.686,1.686,0,0,1-.749.177,1.667,1.667,0,0,1-1.5-.926l-.232-.466a9.987,9.987,0,0,1-1.05-4.445A2.165,2.165,0,0,1,3.5,36.667Zm0,0" transform="translate(0 -6)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.3"></path></g></g>
                </svg>
            </div>
            <div class="categoryName">
                <span><b class="textColor">+15000 products</b> to shop from</span>
            </div>
        </div>
        <div class="categoryBox">
            <div class="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                     <g id="Mask_Group_108" data-name="Mask Group 108" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0"><g id="grocery_1_" data-name="grocery (1)" transform="translate(1.335 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0"><path id="Path_68053" data-name="Path 68053" d="M37.55,7.51,38.818,7.1l1.3,4-1.268.412Zm0,0" transform="translate(-6.897 -1.303)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.0"></path><path id="Path_68054" data-name="Path 68054" d="M35.156,13.227l1.268-.413,1.3,4-1.268.413Zm0,0" transform="translate(-6.457 -2.354)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.1"></path><path id="Path_68055" data-name="Path 68055" d="M7.167,12.818a3.633,3.633,0,0,0,.819,2.836l.963,1.207V28h1.333V17.913l.963.642a.667.667,0,0,0,.74,0l1.63-1.088,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.333.889V38.666H12.282V40H30.948a3.337,3.337,0,0,0,3.333-3.333v-20a.661.661,0,0,0-.143-.4L37.991,6.007a4.49,4.49,0,0,0-.508-4.133A4.26,4.26,0,0,0,33.942,0a4.365,4.365,0,0,0-4.049,2.841L28.848,5.623,27.615,4.391V2a.667.667,0,0,0-.667-.667H19.615A.667.667,0,0,0,18.948,2V3.144a2.082,2.082,0,0,0-2.689-.091V2a1.976,1.976,0,0,0-3.952,0V3.053A2.041,2.041,0,0,0,9.548,3.2a2.112,2.112,0,0,0-.011,2.93l.621.641a2.042,2.042,0,0,0-.605.424l0,0-.007.007a2.053,2.053,0,0,0-.38.544l-.76-1.4-1.173.635,1.724,3.182c-.077.044-.155.087-.228.137-.027.019-.051.04-.078.059L6.067,7.982l-.9.98,2.562,2.363a3.637,3.637,0,0,0-.559,1.493Zm14.078,3.294L19.615,17.2l-1.63-1.087a.667.667,0,0,0-.74,0L15.63,17.19c0-.067-.015-.125-.015-.189a2.992,2.992,0,0,1,5.824-.974.674.674,0,0,0-.194.085Zm1.7.643-.013-.008A4.327,4.327,0,0,0,16.948,13V8.667h6Zm10,19.912a2,2,0,0,1-2,2H28.282V18.357l1.333-.89,1.63,1.087a.667.667,0,0,0,.74,0l.963-.641ZM31.141,3.309a3.026,3.026,0,0,1,2.8-1.976,2.943,2.943,0,0,1,2.445,1.3,3.158,3.158,0,0,1,.356,2.909l-4.128,11-1,.667-1.63-1.087a.667.667,0,0,0-.74,0L27.615,17.2l-1.353-.9ZM28.333,6.994l-3.538,9.418-.513.342V8.276l2.667-2.667ZM20.282,2.667h6V4h-6Zm-.391,2.667h5.448l-2,2H17.891ZM10.5,4.137a.71.71,0,0,1,1.02,0l.979,1a.667.667,0,0,0,1.143-.471V2a.643.643,0,1,1,1.285,0V4.667a.667.667,0,0,0,1.142.467l.982-1a.722.722,0,0,1,1.013,0,.763.763,0,0,1,0,1.066L16.1,7.2l.02.02-.309.309a.662.662,0,0,0-.129.19c-.009.021-.015.041-.022.063a.667.667,0,0,0-.036.176c0,.015-.008.027-.008.041V13.88a4.27,4.27,0,0,0-.421.467l-1.259-2.68A3.6,3.6,0,0,0,11.628,9.8a3.514,3.514,0,0,0-.713-.108l-.171-.2c-.133-.153-.234-.272-.25-.288a.772.772,0,0,1-.2-.678.74.74,0,0,1,.185-.372l.012-.011.017-.018a.715.715,0,0,1,.9-.084.667.667,0,0,0,.852-1.015L10.495,5.206a.77.77,0,0,1,0-1.069ZM8.488,13a2.294,2.294,0,0,1,.984-1.591,2.249,2.249,0,0,1,3.267.847l1.7,3.619a4.271,4.271,0,0,0-.1.474l-.351-.235a.667.667,0,0,0-.74,0L11.615,17.2l-1.479-.987-.143-.179,1.719-1.329L10.9,13.651l-1.733,1.34-.148-.185A2.309,2.309,0,0,1,8.488,13Zm0,0" transform="translate(-0.948 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.2"></path><path id="Path_68056" data-name="Path 68056" d="M1.423,44.337A2.991,2.991,0,0,0,4.114,46a3.029,3.029,0,0,0,1.345-.317L6,45.412l.541.27A3.026,3.026,0,0,0,7.886,46a2.992,2.992,0,0,0,2.691-1.663l.232-.466A11.342,11.342,0,0,0,12,38.829a3.482,3.482,0,0,0-5.333-2.962v-.533A2.667,2.667,0,0,0,4,32.667V34a1.333,1.333,0,0,1,1.333,1.333v.533A3.482,3.482,0,0,0,0,38.829a11.339,11.339,0,0,0,1.191,5.043ZM3.5,36.667a2.147,2.147,0,0,1,1.529.633l.5.5a.667.667,0,0,0,.943,0l.5-.5a2.162,2.162,0,0,1,3.691,1.529,9.986,9.986,0,0,1-1.05,4.447l-.232.467a1.667,1.667,0,0,1-1.5.924,1.684,1.684,0,0,1-.749-.177L6.3,44.07a.667.667,0,0,0-.6,0l-.839.42a1.686,1.686,0,0,1-.749.177,1.667,1.667,0,0,1-1.5-.926l-.232-.466a9.987,9.987,0,0,1-1.05-4.445A2.165,2.165,0,0,1,3.5,36.667Zm0,0" transform="translate(0 -6)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.3"></path></g></g>
                </svg>
            </div>
            <div class="categoryName">
                <span>Pay <b class="textColor">after</b> receiving products</span>
            </div>
        </div>
        <div class="categoryBox">
            <div class="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                     <g id="Mask_Group_108" data-name="Mask Group 108" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0"><g id="grocery_1_" data-name="grocery (1)" transform="translate(1.335 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0"><path id="Path_68053" data-name="Path 68053" d="M37.55,7.51,38.818,7.1l1.3,4-1.268.412Zm0,0" transform="translate(-6.897 -1.303)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.0"></path><path id="Path_68054" data-name="Path 68054" d="M35.156,13.227l1.268-.413,1.3,4-1.268.413Zm0,0" transform="translate(-6.457 -2.354)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.1"></path><path id="Path_68055" data-name="Path 68055" d="M7.167,12.818a3.633,3.633,0,0,0,.819,2.836l.963,1.207V28h1.333V17.913l.963.642a.667.667,0,0,0,.74,0l1.63-1.088,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.333.889V38.666H12.282V40H30.948a3.337,3.337,0,0,0,3.333-3.333v-20a.661.661,0,0,0-.143-.4L37.991,6.007a4.49,4.49,0,0,0-.508-4.133A4.26,4.26,0,0,0,33.942,0a4.365,4.365,0,0,0-4.049,2.841L28.848,5.623,27.615,4.391V2a.667.667,0,0,0-.667-.667H19.615A.667.667,0,0,0,18.948,2V3.144a2.082,2.082,0,0,0-2.689-.091V2a1.976,1.976,0,0,0-3.952,0V3.053A2.041,2.041,0,0,0,9.548,3.2a2.112,2.112,0,0,0-.011,2.93l.621.641a2.042,2.042,0,0,0-.605.424l0,0-.007.007a2.053,2.053,0,0,0-.38.544l-.76-1.4-1.173.635,1.724,3.182c-.077.044-.155.087-.228.137-.027.019-.051.04-.078.059L6.067,7.982l-.9.98,2.562,2.363a3.637,3.637,0,0,0-.559,1.493Zm14.078,3.294L19.615,17.2l-1.63-1.087a.667.667,0,0,0-.74,0L15.63,17.19c0-.067-.015-.125-.015-.189a2.992,2.992,0,0,1,5.824-.974.674.674,0,0,0-.194.085Zm1.7.643-.013-.008A4.327,4.327,0,0,0,16.948,13V8.667h6Zm10,19.912a2,2,0,0,1-2,2H28.282V18.357l1.333-.89,1.63,1.087a.667.667,0,0,0,.74,0l.963-.641ZM31.141,3.309a3.026,3.026,0,0,1,2.8-1.976,2.943,2.943,0,0,1,2.445,1.3,3.158,3.158,0,0,1,.356,2.909l-4.128,11-1,.667-1.63-1.087a.667.667,0,0,0-.74,0L27.615,17.2l-1.353-.9ZM28.333,6.994l-3.538,9.418-.513.342V8.276l2.667-2.667ZM20.282,2.667h6V4h-6Zm-.391,2.667h5.448l-2,2H17.891ZM10.5,4.137a.71.71,0,0,1,1.02,0l.979,1a.667.667,0,0,0,1.143-.471V2a.643.643,0,1,1,1.285,0V4.667a.667.667,0,0,0,1.142.467l.982-1a.722.722,0,0,1,1.013,0,.763.763,0,0,1,0,1.066L16.1,7.2l.02.02-.309.309a.662.662,0,0,0-.129.19c-.009.021-.015.041-.022.063a.667.667,0,0,0-.036.176c0,.015-.008.027-.008.041V13.88a4.27,4.27,0,0,0-.421.467l-1.259-2.68A3.6,3.6,0,0,0,11.628,9.8a3.514,3.514,0,0,0-.713-.108l-.171-.2c-.133-.153-.234-.272-.25-.288a.772.772,0,0,1-.2-.678.74.74,0,0,1,.185-.372l.012-.011.017-.018a.715.715,0,0,1,.9-.084.667.667,0,0,0,.852-1.015L10.495,5.206a.77.77,0,0,1,0-1.069ZM8.488,13a2.294,2.294,0,0,1,.984-1.591,2.249,2.249,0,0,1,3.267.847l1.7,3.619a4.271,4.271,0,0,0-.1.474l-.351-.235a.667.667,0,0,0-.74,0L11.615,17.2l-1.479-.987-.143-.179,1.719-1.329L10.9,13.651l-1.733,1.34-.148-.185A2.309,2.309,0,0,1,8.488,13Zm0,0" transform="translate(-0.948 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.2"></path><path id="Path_68056" data-name="Path 68056" d="M1.423,44.337A2.991,2.991,0,0,0,4.114,46a3.029,3.029,0,0,0,1.345-.317L6,45.412l.541.27A3.026,3.026,0,0,0,7.886,46a2.992,2.992,0,0,0,2.691-1.663l.232-.466A11.342,11.342,0,0,0,12,38.829a3.482,3.482,0,0,0-5.333-2.962v-.533A2.667,2.667,0,0,0,4,32.667V34a1.333,1.333,0,0,1,1.333,1.333v.533A3.482,3.482,0,0,0,0,38.829a11.339,11.339,0,0,0,1.191,5.043ZM3.5,36.667a2.147,2.147,0,0,1,1.529.633l.5.5a.667.667,0,0,0,.943,0l.5-.5a2.162,2.162,0,0,1,3.691,1.529,9.986,9.986,0,0,1-1.05,4.447l-.232.467a1.667,1.667,0,0,1-1.5.924,1.684,1.684,0,0,1-.749-.177L6.3,44.07a.667.667,0,0,0-.6,0l-.839.42a1.686,1.686,0,0,1-.749.177,1.667,1.667,0,0,1-1.5-.926l-.232-.466a9.987,9.987,0,0,1-1.05-4.445A2.165,2.165,0,0,1,3.5,36.667Zm0,0" transform="translate(0 -6)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.3"></path></g></g>
                </svg>
            </div>
            <div class="categoryName">
                <span>Fast <b class="textColor">delivery</b></span>
            </div>
        </div>
        <div class="categoryBox">
            <div class="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                     <g id="Mask_Group_108" data-name="Mask Group 108" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0"><g id="grocery_1_" data-name="grocery (1)" transform="translate(1.335 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0"><path id="Path_68053" data-name="Path 68053" d="M37.55,7.51,38.818,7.1l1.3,4-1.268.412Zm0,0" transform="translate(-6.897 -1.303)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.0"></path><path id="Path_68054" data-name="Path 68054" d="M35.156,13.227l1.268-.413,1.3,4-1.268.413Zm0,0" transform="translate(-6.457 -2.354)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.1"></path><path id="Path_68055" data-name="Path 68055" d="M7.167,12.818a3.633,3.633,0,0,0,.819,2.836l.963,1.207V28h1.333V17.913l.963.642a.667.667,0,0,0,.74,0l1.63-1.088,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.333.889V38.666H12.282V40H30.948a3.337,3.337,0,0,0,3.333-3.333v-20a.661.661,0,0,0-.143-.4L37.991,6.007a4.49,4.49,0,0,0-.508-4.133A4.26,4.26,0,0,0,33.942,0a4.365,4.365,0,0,0-4.049,2.841L28.848,5.623,27.615,4.391V2a.667.667,0,0,0-.667-.667H19.615A.667.667,0,0,0,18.948,2V3.144a2.082,2.082,0,0,0-2.689-.091V2a1.976,1.976,0,0,0-3.952,0V3.053A2.041,2.041,0,0,0,9.548,3.2a2.112,2.112,0,0,0-.011,2.93l.621.641a2.042,2.042,0,0,0-.605.424l0,0-.007.007a2.053,2.053,0,0,0-.38.544l-.76-1.4-1.173.635,1.724,3.182c-.077.044-.155.087-.228.137-.027.019-.051.04-.078.059L6.067,7.982l-.9.98,2.562,2.363a3.637,3.637,0,0,0-.559,1.493Zm14.078,3.294L19.615,17.2l-1.63-1.087a.667.667,0,0,0-.74,0L15.63,17.19c0-.067-.015-.125-.015-.189a2.992,2.992,0,0,1,5.824-.974.674.674,0,0,0-.194.085Zm1.7.643-.013-.008A4.327,4.327,0,0,0,16.948,13V8.667h6Zm10,19.912a2,2,0,0,1-2,2H28.282V18.357l1.333-.89,1.63,1.087a.667.667,0,0,0,.74,0l.963-.641ZM31.141,3.309a3.026,3.026,0,0,1,2.8-1.976,2.943,2.943,0,0,1,2.445,1.3,3.158,3.158,0,0,1,.356,2.909l-4.128,11-1,.667-1.63-1.087a.667.667,0,0,0-.74,0L27.615,17.2l-1.353-.9ZM28.333,6.994l-3.538,9.418-.513.342V8.276l2.667-2.667ZM20.282,2.667h6V4h-6Zm-.391,2.667h5.448l-2,2H17.891ZM10.5,4.137a.71.71,0,0,1,1.02,0l.979,1a.667.667,0,0,0,1.143-.471V2a.643.643,0,1,1,1.285,0V4.667a.667.667,0,0,0,1.142.467l.982-1a.722.722,0,0,1,1.013,0,.763.763,0,0,1,0,1.066L16.1,7.2l.02.02-.309.309a.662.662,0,0,0-.129.19c-.009.021-.015.041-.022.063a.667.667,0,0,0-.036.176c0,.015-.008.027-.008.041V13.88a4.27,4.27,0,0,0-.421.467l-1.259-2.68A3.6,3.6,0,0,0,11.628,9.8a3.514,3.514,0,0,0-.713-.108l-.171-.2c-.133-.153-.234-.272-.25-.288a.772.772,0,0,1-.2-.678.74.74,0,0,1,.185-.372l.012-.011.017-.018a.715.715,0,0,1,.9-.084.667.667,0,0,0,.852-1.015L10.495,5.206a.77.77,0,0,1,0-1.069ZM8.488,13a2.294,2.294,0,0,1,.984-1.591,2.249,2.249,0,0,1,3.267.847l1.7,3.619a4.271,4.271,0,0,0-.1.474l-.351-.235a.667.667,0,0,0-.74,0L11.615,17.2l-1.479-.987-.143-.179,1.719-1.329L10.9,13.651l-1.733,1.34-.148-.185A2.309,2.309,0,0,1,8.488,13Zm0,0" transform="translate(-0.948 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.2"></path><path id="Path_68056" data-name="Path 68056" d="M1.423,44.337A2.991,2.991,0,0,0,4.114,46a3.029,3.029,0,0,0,1.345-.317L6,45.412l.541.27A3.026,3.026,0,0,0,7.886,46a2.992,2.992,0,0,0,2.691-1.663l.232-.466A11.342,11.342,0,0,0,12,38.829a3.482,3.482,0,0,0-5.333-2.962v-.533A2.667,2.667,0,0,0,4,32.667V34a1.333,1.333,0,0,1,1.333,1.333v.533A3.482,3.482,0,0,0,0,38.829a11.339,11.339,0,0,0,1.191,5.043ZM3.5,36.667a2.147,2.147,0,0,1,1.529.633l.5.5a.667.667,0,0,0,.943,0l.5-.5a2.162,2.162,0,0,1,3.691,1.529,9.986,9.986,0,0,1-1.05,4.447l-.232.467a1.667,1.667,0,0,1-1.5.924,1.684,1.684,0,0,1-.749-.177L6.3,44.07a.667.667,0,0,0-.6,0l-.839.42a1.686,1.686,0,0,1-.749.177,1.667,1.667,0,0,1-1.5-.926l-.232-.466a9.987,9.987,0,0,1-1.05-4.445A2.165,2.165,0,0,1,3.5,36.667Zm0,0" transform="translate(0 -6)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.3"></path></g></g>
                </svg>
            </div>
            <div class="categoryName">
                <span>Fast <b class="textColor">delivery</b></span>
            </div>
        </div>
    </div>    
    </div>




        <div className="mainContainer">
            <section id="product-categories">
                <div className="headerContainer">
                    <div className="initialLabel">
                        <h2>
                            <span></span>
                            <span>Popular Categories</span>
                            <span></span>
                        </h2>
                    </div>
                    <div className="viewButton hidden-xs hidden-sm">
                        <a href="/#">View All</a>
                    </div>
                    <button className="scrollLeft hidden-xs hidden-sm" onClick={scrollLeft}>
                            <svg width="10px" height="10px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                                <path transform="translate(0 -952.36)" d="m31.918 1045.4l36.164-31.684 12.918-11.316-12.918-11.316-36.164-31.684-12.918 11.316 36.168 31.684-36.168 31.684zm0 0" stroke="#000" strokeLinecap="round" strokeWidth="2"></path>
                            </svg>
                        </button>
                        <button className="scrollRight hidden-xs hidden-sm" onClick={scrollRight}>
                            <svg width="10px" height="10px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                                <path transform="translate(0 -952.36)" d="m31.918 1045.4l36.164-31.684 12.918-11.316-12.918-11.316-36.164-31.684-12.918 11.316 36.168 31.684-36.168 31.684zm0 0" stroke="#000" strokeLinecap="round" strokeWidth="2"></path>
                            </svg>
                    </button>
                </div>


                <div className="mainTile">
                    <div className="categoryContainer">
                        <a href="/fruits-vegetables">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/fruitsAndVegs.png?q=low&amp;webp=1" alt="Fruits & Vegetables" />
                                </div>
                                <div className="categoryName">Fruits & Vegetables</div>
                            </div>
                        </a>
                        <a href="/meat-fish">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&amp;webp=1" alt="Meat & Fish" />
                                </div>
                                <div className="categoryName">Meat & Fish</div>
                            </div>
                        </a>
                        <a href="/cooking">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&amp;webp=1" alt="Cooking" />
                                </div>
                                <div className="categoryName">Cooking</div>
                            </div>
                        </a>
                        <a href="/beverages">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&amp;webp=1" alt="Beverages" />
                                </div>
                                <div className="categoryName">Beverages</div>
                            </div>
                        </a>
                        <a href="/cleaning">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/home-cleaning.png?q=low&amp;webp=1" alt="Home & Cleaning" />
                                </div>
                                <div className="categoryName">Home & Cleaning</div>
                            </div>
                        </a>
                        <a href="/pest-control">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&amp;webp=1" alt="Pest Control" />
                                </div>
                                <div className="categoryName">Pest Control</div>
                            </div>
                        </a>
                        <a href="/stationery-office">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/stationary.png?q=low&amp;webp=1" alt="Stationery & Office" />
                                </div>
                                <div className="categoryName">Stationery & Office</div>
                            </div>
                        </a>
                        <a href="/personal-care">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beauty.png?q=low&amp;webp=1" alt="Beauty Products" />
                                </div>
                                <div className="categoryName">Beauty Products</div>
                            </div>
                        </a>
                        <a href="/hygiene">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/healthCare.png?q=low&amp;webp=1" alt="Health Products" />
                                </div>
                                <div className="categoryName">Health Products</div>
                            </div>
                        </a>
                        <a href="/pet-care">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/petFood.png?q=low&amp;webp=1" alt="Pet Care" />
                                </div>
                                <div className="categoryName">Pet Care</div>
                            </div>
                        </a>
                        <a href="/kitchen-appliances">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/kitchen-appliances.png?q=low&amp;webp=1" alt="Kitchen Appliances" />
                                </div>
                                <div className="categoryName">Kitchen Appliances</div>
                            </div>
                        </a>
                        <a href="/babycare">
                            <div className="categoryBox">
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/baby-care.png?q=low&amp;webp=1" alt="Baby Care" />
                                </div>
                                <div className="categoryName">Baby Care</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <div className="mainContainer">
            <section id="popularSection">
                <div className="initialLabel">
                    <h2>Popular on Chaldal</h2>
                </div>
                <div className="mainTile">
                    <div className="popularBrandContainer">
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/pran.png?q=low&amp;webp=1" alt="Pran" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/reckitt.png?q=low&amp;webp=1" alt="Reckitt" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/nestle.png?q=low&amp;webp=1" alt="Nestle" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/uniliver.png?q=low&amp;webp=1" alt="Unilever" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/marico.png?q=low&amp;webp=1" alt="Marico" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/godrej-seeklogo.png?q=low&amp;webp=1" alt="Godrej" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/coca-cola.png?q=low&amp;webp=1" alt="Coca-Cola" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-503/Default/stores/chaldal/components/landingPage2/LandingPage/images/fresh.png?q=low&amp;webp=1" alt="Fresh" />
                    </div>
                </div>
            </section>
        </div>
        </div>


        
        </div>
    );
}

export default DeliveryInfo;
