//sidebar.jsx
import React, { useState } from "react";
import LocalGroceryStoreTwoToneIcon from '@mui/icons-material/LocalGroceryStoreTwoTone';
import './css/sidebar.css';

const Sidebar = ({ isOpen,toggleSidebar  }) => {
  
  return (
    <div className={`m1 ${isOpen ? 'open' : ''}`} style={{ width:'240px',  position:'sticky',    background: '#fff' }} onClick={toggleSidebar}>
      <div className="Main">
        <div className='first_menu' style={{ borderBottom: '1px solid #eee' }}>
          <div className="flex" >
            <div className="menu-item" >
              <div className="px-3" style={{ padding: '5px' }}>
                <LocalGroceryStoreTwoToneIcon style={{ paddingLeft: '16px' }} />Grocery
              </div>
            </div>
            <div className="menu-item" >
              <div className="px-3" style={{ padding: '5px' }}>
                <LocalGroceryStoreTwoToneIcon style={{ paddingLeft: '25px' }} />Pharmacy
              </div>
            </div>
            <div className="menu-item" >
              <div className="px-3" style={{ padding: '5px' }}>
                <LocalGroceryStoreTwoToneIcon style={{ paddingLeft: '20.9px' }} />Cookups
              </div>
            </div>
          </div>
        </div>

        <ul className="mid_menu">
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Offers</span>
                <span className="nav-count-label offers-count">
                  <span>27</span>
                </span>
              </a>
            </div>
          </li>
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Egg Club</span>
              </a>
            </div>
          </li>
          <li className="L_2">
            <div style={{ display: 'inline-block', paddingLeft: '13px', position: 'relative' }}>
              <a className="L_2_A" href="#">
                <span>Deal of the Day</span>
                <img class="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/DailyDeal.gif?q=best&amp;webp=1" alt="Dailydeal" />
              </a>
            </div>
          </li>
        </ul>

        <aside className="sidebar">
          <ul>
            <li className="unselected topLevel">
              <div class="name">
              <img class="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/favourites.svg?q=best&amp;webp=1" alt="Fav" />
                <a href="#">Favourites</a>
                </div>
            </li>
            <li data-cid="1506" class="not-in-selection-tree unselected topLevel">
              <div class="name">
              <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/summer-collection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D155983&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
                <a href="#">Summer Collection</a>
              </div>
            </li>

            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/flash-sales?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95784&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />

              <a href="#">Flash Sales</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/popular?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95790&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />

              <a href="#">Popular</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/food?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95785&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />

              <a href="#">Food</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/cleaning-supplies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95783&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Cleaning Supplies</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101765&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Personal Care</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/health-wellness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95788&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Health & Wellness</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/baby-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95781&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>
              <a href="#">Baby Care</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/home-kitchen?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95787&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Home & Kitchen</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/stationery-office?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95792&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1"/>

              <a href="#">Stationery & Office</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/stationery-office?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95792&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Pet Care</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/toys-sports?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D103175&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Toys & Sports</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/beauty-makeup?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116661&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Beauty & MakeUp</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/fashion-lifestyle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D101371&amp;q=low&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Fashion & Lifestyle</a>
            </li>
            <li className="unselected topLevel">
            <img class="MenuItemIcons" src="https://chaldn.com/_mpimage/vehicle-essentials?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D95794&amp;q=best&amp;v=1&amp;m=40&amp;webp=1&amp;alpha=1" />
              <a href="#">Vehicle Essentials</a>
            </li>
          </ul>
        </aside>

        <ul className="bottom-misc-menu">
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/premiumCare.svg?q=best&amp;webp=1" alt="Premium Care" />
              <span>Premium Care</span>
            </a>
          </li>
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/recipe.svg?q=best&amp;webp=1" alt="Recipes" />
              <span>Recipes</span>
            </a>
          </li>
          <li className="unselected topLevel">
            <a href="#">
              <img className="MenuItemIcons" src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb/1.0.0-Deploy-Release-489/Default/components/header/CategoryMenuVertical/images/investIcon.svg?q=best&amp;webp=1" alt="biniyog.io" />
              <span>biniyog.io</span>
            </a>
          </li>
        </ul>

        <div className="quick-access-menu">
          <a href="#" className="help">
            <svg width="20px" height="20px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 512 512">
              <path fill="url(#paint0_linear_1006_2150)" d="M256 42.666C138.24 42.666 42.667 138.24 42.667 256S138.24 469.333 256 469.333 469.333 373.76 469.333 256 373.76 42.666 256 42.666zm21.333 362.667h-42.666v-42.666h42.666v42.666zM321.493 240l-19.2 19.627C286.933 275.2 277.333 288 277.333 320h-42.666v-10.667c0-23.466 9.6-44.8 24.96-60.373l26.453-26.88c7.893-7.68 12.587-18.347 12.587-30.08 0-23.467-19.2-42.667-42.667-42.667-23.467 0-42.667 19.2-42.667 42.667h-42.666c0-47.147 38.186-85.333 85.333-85.333s85.333 38.186 85.333 85.333c0 18.773-7.68 35.84-19.84 48z"></path>
              <defs>
                <linearGradient id="paint0_linear_1006_2150" x1="256" x2="256" y1="42.666" y2="469.333" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FD4A85"></stop>
                  <stop offset="1" stop-color="#FF9D8C"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span>Help</span>
          </a>
          <div className="complaint">
            <svg width="20px" height="20px" style={{ display: 'inline-block', verticalAlign: 'middle' }} viewBox="0 0 20 20">
              <path fill="url(#paint0_linear_800_2512)" fill-rule="evenodd" d="M10 0a10 10 0 100 20A10 10 0 0010 0zm3.333 5L10 8.333 6.667 5 5 6.667 8.333 10 5 13.333 6.667 15 10 11.667 13.333 15 15 13.333 11.667 10 15 6.667 13.333 5z" clip-rule="evenodd"></path>
              <defs>
                <linearGradient id="paint0_linear_800_2512" x1="10" x2="10" y1="0" y2="20" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FD4A85"></stop>
                  <stop offset="1" stop-color="#FF9D8C"></stop>
                </linearGradient>
              </defs>
            </svg>
            <span>Complaint</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;