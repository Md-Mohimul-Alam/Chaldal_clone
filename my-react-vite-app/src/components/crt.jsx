import React, { useRef } from 'react';
import './css/crt.css';
import Delivery from './hfh';


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
        <div className="mainTile">
        <div className="categoryBox">
            <div className="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                     <g id="Mask_Group_108" data-name="Mask Group 108" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0"><g id="grocery_1_" data-name="grocery (1)" transform="translate(1.335 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0"><path id="Path_68053" data-name="Path 68053" d="M37.55,7.51,38.818,7.1l1.3,4-1.268.412Zm0,0" transform="translate(-6.897 -1.303)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.0"></path><path id="Path_68054" data-name="Path 68054" d="M35.156,13.227l1.268-.413,1.3,4-1.268.413Zm0,0" transform="translate(-6.457 -2.354)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.1"></path><path id="Path_68055" data-name="Path 68055" d="M7.167,12.818a3.633,3.633,0,0,0,.819,2.836l.963,1.207V28h1.333V17.913l.963.642a.667.667,0,0,0,.74,0l1.63-1.088,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.63,1.087a.667.667,0,0,0,.74,0l1.63-1.087,1.333.889V38.666H12.282V40H30.948a3.337,3.337,0,0,0,3.333-3.333v-20a.661.661,0,0,0-.143-.4L37.991,6.007a4.49,4.49,0,0,0-.508-4.133A4.26,4.26,0,0,0,33.942,0a4.365,4.365,0,0,0-4.049,2.841L28.848,5.623,27.615,4.391V2a.667.667,0,0,0-.667-.667H19.615A.667.667,0,0,0,18.948,2V3.144a2.082,2.082,0,0,0-2.689-.091V2a1.976,1.976,0,0,0-3.952,0V3.053A2.041,2.041,0,0,0,9.548,3.2a2.112,2.112,0,0,0-.011,2.93l.621.641a2.042,2.042,0,0,0-.605.424l0,0-.007.007a2.053,2.053,0,0,0-.38.544l-.76-1.4-1.173.635,1.724,3.182c-.077.044-.155.087-.228.137-.027.019-.051.04-.078.059L6.067,7.982l-.9.98,2.562,2.363a3.637,3.637,0,0,0-.559,1.493Zm14.078,3.294L19.615,17.2l-1.63-1.087a.667.667,0,0,0-.74,0L15.63,17.19c0-.067-.015-.125-.015-.189a2.992,2.992,0,0,1,5.824-.974.674.674,0,0,0-.194.085Zm1.7.643-.013-.008A4.327,4.327,0,0,0,16.948,13V8.667h6Zm10,19.912a2,2,0,0,1-2,2H28.282V18.357l1.333-.89,1.63,1.087a.667.667,0,0,0,.74,0l.963-.641ZM31.141,3.309a3.026,3.026,0,0,1,2.8-1.976,2.943,2.943,0,0,1,2.445,1.3,3.158,3.158,0,0,1,.356,2.909l-4.128,11-1,.667-1.63-1.087a.667.667,0,0,0-.74,0L27.615,17.2l-1.353-.9ZM28.333,6.994l-3.538,9.418-.513.342V8.276l2.667-2.667ZM20.282,2.667h6V4h-6Zm-.391,2.667h5.448l-2,2H17.891ZM10.5,4.137a.71.71,0,0,1,1.02,0l.979,1a.667.667,0,0,0,1.143-.471V2a.643.643,0,1,1,1.285,0V4.667a.667.667,0,0,0,1.142.467l.982-1a.722.722,0,0,1,1.013,0,.763.763,0,0,1,0,1.066L16.1,7.2l.02.02-.309.309a.662.662,0,0,0-.129.19c-.009.021-.015.041-.022.063a.667.667,0,0,0-.036.176c0,.015-.008.027-.008.041V13.88a4.27,4.27,0,0,0-.421.467l-1.259-2.68A3.6,3.6,0,0,0,11.628,9.8a3.514,3.514,0,0,0-.713-.108l-.171-.2c-.133-.153-.234-.272-.25-.288a.772.772,0,0,1-.2-.678.74.74,0,0,1,.185-.372l.012-.011.017-.018a.715.715,0,0,1,.9-.084.667.667,0,0,0,.852-1.015L10.495,5.206a.77.77,0,0,1,0-1.069ZM8.488,13a2.294,2.294,0,0,1,.984-1.591,2.249,2.249,0,0,1,3.267.847l1.7,3.619a4.271,4.271,0,0,0-.1.474l-.351-.235a.667.667,0,0,0-.74,0L11.615,17.2l-1.479-.987-.143-.179,1.719-1.329L10.9,13.651l-1.733,1.34-.148-.185A2.309,2.309,0,0,1,8.488,13Zm0,0" transform="translate(-0.948 0)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.2"></path><path id="Path_68056" data-name="Path 68056" d="M1.423,44.337A2.991,2.991,0,0,0,4.114,46a3.029,3.029,0,0,0,1.345-.317L6,45.412l.541.27A3.026,3.026,0,0,0,7.886,46a2.992,2.992,0,0,0,2.691-1.663l.232-.466A11.342,11.342,0,0,0,12,38.829a3.482,3.482,0,0,0-5.333-2.962v-.533A2.667,2.667,0,0,0,4,32.667V34a1.333,1.333,0,0,1,1.333,1.333v.533A3.482,3.482,0,0,0,0,38.829a11.339,11.339,0,0,0,1.191,5.043ZM3.5,36.667a2.147,2.147,0,0,1,1.529.633l.5.5a.667.667,0,0,0,.943,0l.5-.5a2.162,2.162,0,0,1,3.691,1.529,9.986,9.986,0,0,1-1.05,4.447l-.232.467a1.667,1.667,0,0,1-1.5.924,1.684,1.684,0,0,1-.749-.177L6.3,44.07a.667.667,0,0,0-.6,0l-.839.42a1.686,1.686,0,0,1-.749.177,1.667,1.667,0,0,1-1.5-.926l-.232-.466a9.987,9.987,0,0,1-1.05-4.445A2.165,2.165,0,0,1,3.5,36.667Zm0,0" transform="translate(0 -6)" data-reactid=".rbiugtaj6u.b.2.0.0.2.0.$1.0.0.0.0.3"></path></g></g>
                </svg>
            </div>
            <div className="categoryName">
                <span><b className="textColor">+15000 products</b> to shop from</span>
            </div>
        </div>
        <div className="categoryBox">
            <div className="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                    <g id="Mask_Group_106" data-name="Mask Group 106" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0"><g id="wallet" transform="translate(0.626 0)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0"><g id="Group_41780" data-name="Group 41780" transform="translate(0 0)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.0"><g id="Group_41779" data-name="Group 41779" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.0.0"><path id="Path_68051" data-name="Path 68051" d="M38.234,23.429h-.6V18.037a2.532,2.532,0,0,0-1.074-2.069v-.734A1.933,1.933,0,0,0,34.63,13.3h-.447l1.71-2.509a1.848,1.848,0,0,0-.486-2.565L23.8.321a1.846,1.846,0,0,0-2.565.486L11.223,15.5H8.436L9.108,8.7a.2.2,0,0,1,.127-.169A4.333,4.333,0,0,0,11.349,6.81a.2.2,0,0,1,.189-.089l4.371.432a.57.57,0,0,0,.112-1.134L11.65,5.587a1.334,1.334,0,0,0-1.263.611A3.186,3.186,0,0,1,8.833,7.461a1.332,1.332,0,0,0-.859,1.124L7.29,15.5H6.563L7.627,4.738A.706.706,0,0,1,8.4,4.1l8.834.873a.57.57,0,0,0,.112-1.134L8.511,2.97A1.848,1.848,0,0,0,6.492,4.626L5.635,13.3H4.175a1.933,1.933,0,0,0-1.931,1.931v.5a2.536,2.536,0,0,0-1.478,2.3V37.467A2.536,2.536,0,0,0,3.3,40H35.1a2.536,2.536,0,0,0,2.533-2.533V32.075h.6a1.283,1.283,0,0,0,1.281-1.281V24.711A1.283,1.283,0,0,0,38.234,23.429Zm-3.6-8.986h0a.792.792,0,0,1,.791.791v.29a2.54,2.54,0,0,0-.32-.021H32.684l.723-1.061ZM22.18,1.449a.7.7,0,0,1,.452-.3.716.716,0,0,1,.133-.013.7.7,0,0,1,.4.123l11.6,7.908a.707.707,0,0,1,.186.981L31.3,15.5h-.875l1.788-2.624a1.332,1.332,0,0,0,.062-1.413A3.185,3.185,0,0,1,31.9,9.5a1.333,1.333,0,0,0-.577-1.279l-6.015-4.1a1.333,1.333,0,0,0-1.4-.069,3.186,3.186,0,0,1-1.969.364,1.349,1.349,0,0,0-1.293.575L13.477,15.5H12.6Zm.251,9.679A4.7,4.7,0,0,0,17.746,15.5H14.857l6.726-9.871h0a.2.2,0,0,1,.167-.09l.026,0a4.334,4.334,0,0,0,2.679-.495.2.2,0,0,1,.209.013l6.016,4.1a.2.2,0,0,1,.088.19,4.332,4.332,0,0,0,.519,2.674.2.2,0,0,1-.011.211L29.05,15.5H27.117A4.7,4.7,0,0,0,22.431,11.128ZM25.974,15.5H18.889a3.557,3.557,0,0,1,7.086,0Zm-22.59-.27a.792.792,0,0,1,.791-.791H5.523l-.1,1.061H3.384Zm-1.478,2.8A1.4,1.4,0,0,1,3.3,16.644H35.1A1.4,1.4,0,0,1,36.5,18.037v1.582H1.906ZM36.5,37.467A1.4,1.4,0,0,1,35.1,38.86H3.3a1.4,1.4,0,0,1-1.393-1.393V35.885H4.98a.57.57,0,0,0,0-1.14H1.906V20.759H36.5v2.67H31.076a4.328,4.328,0,0,0-3.889,2.436l-.007.014-.017.037a4.3,4.3,0,0,0-.215.551v0a4.324,4.324,0,0,0,4.129,5.605H36.5v2.67H8.629a.57.57,0,1,0,0,1.14H36.5Zm1.88-6.673a.142.142,0,0,1-.141.141H31.076a3.186,3.186,0,0,1-2.8-1.667q-.037-.068-.07-.137-.067-.139-.121-.285a3.186,3.186,0,0,1,0-2.187q.054-.146.121-.285.034-.069.07-.137a3.186,3.186,0,0,1,2.8-1.667h7.158a.142.142,0,0,1,.141.141v6.083Z" transform="translate(-0.766 0)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.0.0.0"></path></g></g><g id="Group_41782" data-name="Group 41782" transform="translate(28.131 25.44)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.1"><g id="Group_41781" data-name="Group 41781" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.1.0"><path id="Path_68052" data-name="Path 68052" d="M37.539,31.164a2.312,2.312,0,1,0,2.312,2.313A2.315,2.315,0,0,0,37.539,31.164Zm0,3.485a1.173,1.173,0,1,1,1.173-1.173A1.174,1.174,0,0,1,37.539,34.649Z" transform="translate(-35.227 -31.164)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$2.0.0.0.0.1.0.0"></path></g></g></g></g>                </svg>
            </div>
            <div className="categoryName">
                <span>Pay <b className="textColor">after</b> receiving products</span>
            </div>
        </div>
        <div className="categoryBox">
            <div className="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                    <g id="Mask_Group_107" data-name="Mask Group 107" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$3.0.0.0"><path id="fast-delivery" d="M35.553,27.472h-.216L32.97,21.951a3.278,3.278,0,0,0,1.272.275.656.656,0,0,0,.656-.656V16.326a.656.656,0,0,0-.656-.656A3.278,3.278,0,0,0,31.154,17.9a2.419,2.419,0,0,0-1.652-.99,3.278,3.278,0,0,0-1.246.079h-.57c-1.108,0-1.6-.656-2.373-1.724l-.387-.544a2.262,2.262,0,0,0,1.115-.361A2.373,2.373,0,0,0,26.99,12.8a1.842,1.842,0,0,0,.865-1.141,1.174,1.174,0,0,0-.361-1.029,3.127,3.127,0,0,1-.426-1.508.656.656,0,0,0,.616-.669A5.246,5.246,0,1,0,18.7,12.143a5.338,5.338,0,0,0,.459.407c-2.531.616-3.862,2.99-4.544,5.049a2.085,2.085,0,0,0-1.482-.616H6.173a2.085,2.085,0,0,0-1.757.957.657.657,0,1,0,1.1.715.774.774,0,0,1,.656-.354H7.36v1.967a.656.656,0,0,0,.656.656h3.278a.656.656,0,0,0,.656-.656V18.293h1.187a.78.78,0,0,1,.78.78v5a.78.78,0,0,1-.78.774H6.173a.767.767,0,0,1-.78-.656H6.7a.656.656,0,1,0,0-1.311H5.393V21.571h.656a.656.656,0,0,0,0-1.311H2.77a.656.656,0,0,0,0,1.311H4.081v1.311H1.459a.656.656,0,0,0,0,1.311H4.081A2.085,2.085,0,0,0,6.16,26.161H9.438a4.373,4.373,0,0,0-.767,1.01A12.018,12.018,0,0,0,7.36,32.717a.656.656,0,0,0,.656.656h2.013a5.245,5.245,0,0,0,10.4,0h9.927a5.245,5.245,0,1,0,5.2-5.9ZM10.638,19.6H8.671V18.293h1.967Zm22.948-2.511V20.8a1.967,1.967,0,0,1,0-3.711ZM29.311,18.2a1.259,1.259,0,0,1,1.049,1l.17.4a5.966,5.966,0,0,1-2.957.656,1.731,1.731,0,0,1,.97-1.967,1.915,1.915,0,0,1,.767-.085Zm-3.232-6.4a.656.656,0,0,0-.361.59,1.187,1.187,0,0,1-.413.865,2.333,2.333,0,0,1-1.967-.164.656.656,0,0,0-.144,0l-.1-.085V10.5a1.383,1.383,0,0,1,1.383-1.383h1.239a4.386,4.386,0,0,0,.767,2.373,1.731,1.731,0,0,1-.407.321ZM18.506,8.4a4.006,4.006,0,0,1,3.875-3.875h.059A3.934,3.934,0,0,1,26.321,7.8H24.479A2.7,2.7,0,0,0,21.784,10.5v1.842a3.934,3.934,0,0,1-3.278-3.934Zm1.967,5.3c2.144,0,2.931,1.121,3.763,2.3a4.768,4.768,0,0,0,2.492,2.144,3.278,3.278,0,0,0-.479,2.006,5.966,5.966,0,0,1-3.9-2.859.656.656,0,1,0-1.121.656,7.979,7.979,0,0,0,.813,1.128l-.059.039a5.711,5.711,0,0,0-1.252,2.452h-5.5v-.656C15.274,20.515,16.021,13.7,20.473,13.7ZM15.228,24.069V22.882h5.9a3.182,3.182,0,0,1,3.278,3.278v3.278H21.784V28.128a3.16,3.16,0,0,0-3.278-3.278H15.077a2.072,2.072,0,0,0,.151-.78Zm0,12.582a3.934,3.934,0,0,1-3.875-3.278H12.7a2.623,2.623,0,0,0,5.062,0H19.1a3.934,3.934,0,0,1-3.875,3.278ZM14.1,33.373h2.255a1.311,1.311,0,0,1-2.255,0ZM8.671,32.062a10.55,10.55,0,0,1,1.193-4.321,3,3,0,0,1,2.695-1.58h5.947a1.869,1.869,0,0,1,1.967,1.967v1.967a3.278,3.278,0,0,0,.656,1.967Zm15.08,0A1.967,1.967,0,0,1,21.9,30.75h3.16a1.233,1.233,0,0,1,1.311,1.265,5.245,5.245,0,0,1-.656.046Zm4.2-.767a1.691,1.691,0,0,1-.321.282,2.452,2.452,0,0,0-1.915-2.046v-3.37a4.3,4.3,0,0,0-3.659-4.491,4.432,4.432,0,0,1,.846-1.606.617.617,0,0,0,.046-.072,7.166,7.166,0,0,0,3.541,1.534l1.849,8.038A2.334,2.334,0,0,1,27.954,31.294Zm1.7-2-1.8-7.724a7.055,7.055,0,0,0,3.2-.734l3.095,7.212-2.859,4.013H29a3.672,3.672,0,0,0,.656-2.767Zm5.9,2.767H34.425a1.311,1.311,0,1,1,0,1.311h1.128a.656.656,0,1,0,0-1.311Zm-2.662,0,.229-.321a2.621,2.621,0,0,0-.1.321Zm2.662,4.59a3.934,3.934,0,0,1-3.875-3.278h1.344a2.623,2.623,0,1,0,.8-2.623l1.4-1.967h.334a3.934,3.934,0,0,1,0,7.868Z" transform="translate(-0.803 -0.587)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$3.0.0.0.0"></path></g>                </svg>
            </div>
            <div className="categoryName">
                <span>Get your delivery within <b className="textColor">1 hour</b></span>
            </div>
        </div>
        <div className="categoryBox">
            <div className="categoryImg">
                <svg width="20px" height="20px" viewBox="0 0 40 40">
                    <g id="Mask_Group_105" data-name="Mask Group 105" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$4.0.0.0"><g id="pay_1_" data-name="pay (1)" transform="translate(0 0)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$4.0.0.0.0"><path id="Path_68049" data-name="Path 68049" d="M34.582,34.824l-1.7-1.017a3.341,3.341,0,0,0-1.713-.473H28.616a6.031,6.031,0,0,0-1.55.2l-7.7,2.067a2.685,2.685,0,0,0-1.813,1.681l-6.772-3.664a2.653,2.653,0,0,0-1.812-.3,2.5,2.5,0,0,0-.674.221A2.621,2.621,0,0,0,7.15,34.606,2.671,2.671,0,0,0,6.8,35.933a2.642,2.642,0,0,0,1.318,2.306L20.252,45.5a3.333,3.333,0,0,0,1.755.5H31.4a3.324,3.324,0,0,0,1.225-.233l1.956-.772V46h6.667V32.667H34.582Zm-2.446,9.7a2.006,2.006,0,0,1-.733.14h-9.4a2.006,2.006,0,0,1-1.062-.305L8.791,37.091a1.326,1.326,0,0,1-.663-1.158,1.354,1.354,0,0,1,.179-.667,1.311,1.311,0,0,1,.573-.529,1.256,1.256,0,0,1,.333-.108,1.4,1.4,0,0,1,.256-.024,1.307,1.307,0,0,1,.653.173l7.343,3.968c.008.041.008.081.019.121a2.673,2.673,0,0,0,2.577,1.973,6.552,6.552,0,0,0,1.1-.2l6.926-1.854L27.743,37.5l-6.9,1.845c-.3.07-.7.15-.777.157a1.333,1.333,0,0,1-1.289-.982,1.217,1.217,0,0,1-.039-.247s-.005-.161,0-.218a1.348,1.348,0,0,1,.981-1.176l7.7-2.059a4.66,4.66,0,0,1,1.2-.159h2.555a2,2,0,0,1,1.027.284l2.383,1.427V43.56ZM35.915,34h4V44.667h-4Zm0,0" transform="translate(-1.248 -6)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$4.0.0.0.0.0"></path><path id="Path_68050" data-name="Path 68050" d="M27.5,5.333,23.92,1.757A5.958,5.958,0,0,0,19.677,0H11.3A3.356,3.356,0,0,0,9.805.352L8.311,1.1a1.976,1.976,0,0,1-.967.209l-.677-.024V0H0V14.667H6.667v-2H7.8l.4.267A7.35,7.35,0,0,0,12,14.155v8.511H40V5.333Zm-22.163,8h-4v-12h4Zm3.608-1.509L8.2,11.333H6.667V2.619l.629.022a3.347,3.347,0,0,0,1.612-.349L10.4,1.545a2,2,0,0,1,.9-.211h8.381a4.635,4.635,0,0,1,3.3,1.367l2.633,2.633h-5.5L18.491,3.715l-.942.942,4.709,4.71a1.337,1.337,0,1,1-1.887,1.895L16.438,7.329l-.467.4a3.533,3.533,0,0,1-4.493.066l-.386-.313-.84,1.036.391.317A4.86,4.86,0,0,0,12,9.6v3.221a6.012,6.012,0,0,1-3.059-1Zm9.483-.624,1.006,1.006a2.686,2.686,0,0,0,3.767,0,3.375,3.375,0,1,0,.379-.483,2.622,2.622,0,0,0,.218-2.393h8.927A4.011,4.011,0,0,0,36,12.611v2.777a4.011,4.011,0,0,0-3.278,3.278H19.278A4.011,4.011,0,0,0,16,15.389V12.611A3.98,3.98,0,0,0,18.425,11.2ZM24,14a2,2,0,1,1,2,2A2,2,0,0,1,24,14Zm14.667,7.333H13.333V9.879a4.848,4.848,0,0,0,3-.767l1.137,1.137a2.66,2.66,0,0,1-2.137,1.083h-.667v5.333h.667A2.667,2.667,0,0,1,18,19.333V20H34v-.667a2.667,2.667,0,0,1,2.667-2.667h.667V11.333h-.667A2.667,2.667,0,0,1,34,8.667V8H22.776L21.443,6.667H38.667Zm0,0" transform="translate(0 0)" data-reactid=".je1swuuv1e.b.2.0.0.2.0.$4.0.0.0.0.1"></path></g></g>                </svg>
            </div>
            <div className="categoryName">
                <span>Get offers that <b className="textColor">Save Money</b></span>
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
                    <div className="viewButton hidden-xs hidden-sm" >
                        <span  href="/#">View All</span>
                    </div>
                    <div className="scrollButtons" style={{width:'100px',display:'flex'}}>
                        <div className="scrollLeft" onClick={scrollLeft} style={{ backgroundColor: 'white' , alignItems:'center'}}>
                            <svg width="10px" height="10px" style={{ display: 'inline-block',alignItems:'center', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                                <path transform="translate(0 -952.36)" d="m31.918 1045.4l36.164-31.684 12.918-11.316-12.918-11.316-36.164-31.684-12.918 11.316 36.168 31.684-36.168 31.684zm0 0" stroke="#000" strokeLinecap="round" strokeWidth="2"></path>
                            </svg>
                        </div>
                        <div className="scrollRight" onClick={scrollRight} style={{ background: 'White', alignItems:'center'  }}>
                            <svg width="10px" height="10px" style={{ display: 'inline-block',alignItems:'center', verticalAlign: 'middle' }} viewBox="0 0 100 100">
                                <path transform="translate(0 -952.36)" d="m31.918 1045.4l36.164-31.684 12.918-11.316-12.918-11.316-36.164-31.684-12.918 11.316 36.168 31.684-36.168 31.684zm0 0" stroke="#000" strokeLinecap="round" strokeWidth="2"></path>
                            </svg>
                        </div>
                    </div>

                </div>


                <div className="mainTile">
                    <div className="categoryContainer" ref={categoryContainerRef} >
                        <span  href="/fruits-vegetables">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1" />
                                </div>
                                <div className="categoryName">Fruits & Vegetables</div>
                            </div>
                        </span>
                        <span  href="/meat-fish">
                                <div className="categoryBox" style={{background:'White'}}>                               
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/meatAndFish.png?q=low&webp=1" />
                                </div>
                                <div className="categoryName">Meat & Fish</div>
                            </div>
                        </span>
                        <span  href="/cooking">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/cooking.png?q=low&webp=1" alt="Cooking" />
                                </div>
                                <div className="categoryName">Cooking</div>
                            </div>
                        </span>
                        <span  href="/beverages">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-517/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beverages.png?q=low&amp;webp=1" alt="Beverages" />
                                </div>
                                <div className="categoryName">Beverages</div>
                            </div>
                        </span>
                        <span  href="/cleaning">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/home-cleaning.png?q=low&webp=1" alt="Home & Cleaning" />
                                </div>
                                <div className="categoryName">Home & Cleaning</div>
                            </div>
                        </span>
                        <span  href="/pest-control">
                                <div className="categoryBox" style={{background:'White'}}>                               
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-517/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/pest-control.png?q=low&webp=1" alt="Pest Control" />
                                </div>
                                <div className="categoryName">Pest Control</div>
                            </div>
                        </span>
                        <span  href="/stationery-office">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-518/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/stationary.png?q=low&webp=1" alt="Stationery & Office" />
                                </div>
                                <div className="categoryName">Stationery & Office</div>
                            </div>
                        </span>
                        <span  href="#">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/beauty.png?q=low&webp=1" alt="Beauty Products" />
                                </div>
                                <div className="categoryName">Beauty Products</div>
                            </div>
                        </span>
                        <span  href="/hygiene">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-517/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/healthCare.png?q=low&webp=11" alt="Health Products" />
                                </div>
                                <div className="categoryName">Health Products</div>
                            </div>
                        </span>
                        <span  href="/pet-care">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-517/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/petFood.png?q=low&webp=1" alt="Pet Care" />
                                </div>
                                <div className="categoryName">Pet Care</div>
                            </div>
                        </span>
                        <span  href="/kitchen-appliances">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-518/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/kitchen-appliances.png?q=low&webp=1" alt="Kitchen Appliances" />
                                </div>
                                <div className="categoryName">Kitchen Appliances</div>
                            </div>
                        </span>
                        <span  href="/babycare">
                                <div className="categoryBox" style={{background:'White'}}>                                
                                <div className="categoryImg">
                                    <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-508/Default/stores/chaldal/components/landingPage2/LandingPageCategories/images/categories/baby-care.png?q=low&webp=1" alt="Baby Care" />
                                </div>
                                <div className="categoryName">Baby Care</div>
                            </div>
                        </span>
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
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/pran.png?q=low&webp=1" alt="Pran" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/reckitt.png?q=low&webp=1" alt="Reckitt" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/nestle.png?q=low&webp=1" alt="Nestle" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/uniliver.png?q=low&webp=1" alt="Unilever" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/marico.png?q=low&webp=1" alt="Marico" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/godrej-seeklogo.png?q=low&webp=1" alt="Godrej" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/coca-cola.png?q=low&webp=1" alt="Coca-Cola" />
                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/landingPage2/LandingPage/images/fresh.png?q=low&webp=1" alt="Fresh" />
                    </div>
                </div>
            </section>
        </div>
        </div>

    <section id="bannerContainer">
        <span  href="/invest">
            <div className="bannerContent">
                <img src="https://chaldn.com/videos/Chaldal-biniyog-wide-banner.jpg"/>
            </div>
        </span>
    </section>
  
    <Delivery/>
    
        
</div>
    );
}

export default DeliveryInfo;
