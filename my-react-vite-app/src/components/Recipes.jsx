
import React, { useState, useEffect, useRef } from 'react';

import './css/Recipes.css';

import logo from './img/logo.png';
import Sidebar from './sidebar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeliveryInfo from './crt';
import CustomizedInputBase from './search';
import STC_ChT from './Sticky_chat/sticky_chat';
import Stickycart from './Sticky_chat/sticky_cart';
import { Link } from 'react-router-dom';


const Recipe = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const logoRef = useRef(null);
  const searchBarRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    toggleSidebar();
};
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (logoRef.current && searchBarRef.current) {
      const logoBottom = logoRef.current.getBoundingClientRect().bottom;
      setIsSticky(scrollY > logoBottom);
      if (scrollY === 0) {
        setIsSearchVisible(true); 
      }
      else{
        setIsSearchVisible(scrollY <= logoBottom && scrollY !== 0); 
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <Link className='dashboard-container'>
     
      <header className="header" ref={logoRef}>
      <STC_ChT/>
        <div className='flex' >
        <button className={`hamburgerMenu ${isActive ? 'active' : ''}`}
            onClick={handleClick}>
            <svg id="noun_menu_1119465" width="23px" height="23px" viewBox="0 0 24 19.641">
                        <path
                            id="Path_50263"
                            d="M27.663,33.527H43.246a1.563,1.563,0,0,0,0-3.127H27.663a1.563,1.563,0,0,0,0,3.127Z"
                            transform="translate(-26.1 -30.4)"
                        />
                        <path
                            id="Path_50264"
                            d="M43.194,63.6H27.663a1.563,1.563,0,0,0,0,3.127H43.246a1.536,1.536,0,0,0,1.563-1.563A1.58,1.58,0,0,0,43.194,63.6Z"
                            transform="translate(-26.1 -47.086)"
                        />
                        <path
                            id="Path_50265"
                            d="M48.547,47H27.6a1.565,1.565,0,0,0,0,3.127H48.6a1.507,1.507,0,0,0,1.5-1.563A1.548,1.548,0,0,0,48.547,47Z"
                            transform="translate(-26.1 -38.743)"
                        />
                    </svg>
        </button>
          <div className="logo_111 " >
            <Link  to="/" >
              <img src={logo} className="egg chaldal_logo" alt="logo" />
            </Link>
          </div>

                <div className='search_header' style={{  top:'1px' ,paddingLeft: '30px'}}>
                  <CustomizedInputBase/>
                </div>

          <div className="lcn">
            <div className='location_btn'>
              <ButtonGroup>
                <Button style={{ color: '#ff686e', border: '0' }}>
                  <LocationOnIcon sx={{ color: '#ff686e', padding: '3px' }} />
                  Location
                  <ArrowDropDownIcon style={{ color: '#ff686e', padding: '3px' }} />
                </Button>
              </ButtonGroup>
            </div>
            <div className="localeSwitch2 area">
              <div className="localeLeftContainer">
                <p className="selectedLocale2">EN&nbsp;</p>
              </div>
              <div className="localeRightContainer">
                <p className="">&nbsp;বাং</p>
              </div>
            </div>
            <div className="login_D">
              <div className='login'>
                <Button className='btn'>
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
        {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}

      </header>
        
        <div className="everythingElseWrapper unauthed" style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '18%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>
            <section className="bodyTable">
                <div className="Recipe-Router">
                    <div id='recipe'>
                        <section className="header-section">
                            <div>
                                <div>
                                <div className="noCarousel">
                                    <div className="items-slides-inner-container long_transition">
                                    <ul>
                                        <li style={{width: '1440px'}}>
                                        <div className="banner-image">
                                            <a href="/recipes">
                                            <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D46218&amp;q=low&amp;v=1&amp;webp=1" className="banner-img-class"/>
                                            </a>
                                        </div>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </section>

                        <section className="item-section">
                            <div className="content">
                                <div className="recipe-item">
                                <a href="/recipes/category/bangladesher-pitha">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/desserts?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40089&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Desserts</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/hilsha-special">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/fish-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40133&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Fish recipe</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/beef-meat">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/beef?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40137&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Beef</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/delicious-chicken-recipe">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/chicken?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40142&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Chicken</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/variety-egg-recipes">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/eggs?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40145&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Eggs</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/assorted-vegetable-recipe">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/mash-veggies?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40157&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Mash & veggies</div>
                                </a>
                                </div>
                                <div className="recipe-item">
                                <a href="/recipes/category/snacks-recipe-collection">
                                    <img className="recipe-img" src="https://chaldn.com/_mpimage/snacks?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43375&amp;q=low&amp;v=1&amp;m=75&amp;webp=1"/>
                                    <div className="recipe-title">Snacks</div>
                                </a>
                                </div>
                            </div>
                        </section>

                        <section className="recipe-section"style={{width:'1440px', alignItems:'center'}}>
                            <div className="title-area">
                                <h2><span className="titleFont"><span>Recipes</span></span></h2>
                            </div>
                            <div className="recipeItemsSection" >
                                <div className="individual-recipe">
                                    <a href="/recipes/nescafe-hot-latte-coffee" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-hot-latte-coffee?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131795&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Nescafe Hot Latte</h3>
                                            <h5><span><em>Cook Time :</em> 15 Mins</span></h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-mocha-frappuccino" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-mocha-frappuccino?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131793&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Nescafe Mocha Frappuccino</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/pistachio-ice-cream" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                        <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pistachio-ice-cream?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131863&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                        <div className="individual-recipe-title">
                                            <h3>Pistachio Ice Cream</h3>
                                            <h5><em>Cook Time :</em> 25 Mins</h5>
                                        </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-milkshake-with-dry-fruits-2" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-milkshake-with-dry-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131594&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                                <h3>Nescafe Milkshake With Dry Fruits</h3>
                                                <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/mango-smoothie" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-smoothie?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79204&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                                <h3>Mango Smoothie</h3>
                                                <h5><em>Cook Time :</em> 5 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/nescafe-milkshake-with-dry-fruits-2" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/nescafe-milkshake-with-dry-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D131594&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Nescafe Milkshake With Dry Fruits</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/mango-smoothie" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-smoothie?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D79204&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Mango Smoothie</h3>
                                            <h5><em>Cook Time :</em> 5 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/mango-royale" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/mango-royale?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D78965&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Mango Royale</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/lipton-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/lipton-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D62891&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Lipton Healthy Hydration</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/custard-trifle" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/custard-trifle?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60174&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Custard Trifle</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/pineapple-iced-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pineapple-iced-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60155&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Pineapple Iced Tea</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/watermelon-iced-tea" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/watermelon-iced-tea?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D60113&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Watermelon Iced Tea</h3>
                                            <h5><em>Cook Time :</em> 10 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/gurer-payesh" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/gurer-payesh?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D46225&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Gurer Payesh</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/pan-cake" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/pan-cake?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D44976&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Pan Cake</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/fruits-salad" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/fruits-salad?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D44336&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Fruits Salad</h3>
                                            <h5><em>Cook Time :</em> 15 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/laccha-shemai" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/laccha-shemai?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43932&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Laccha Shemai</h3>
                                            <h5><em>Cook Time :</em> 20 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/gajor-halva" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/gajor-halva?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43124&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Gajor Halva</h3>
                                            <h5><em>Cook Time :</em> 30 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/boot-daal-barfi" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/boot-daal-barfi?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43122&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Boot Daal Barfi</h3>
                                            <h5><em>Cook Time :</em> 25 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/suji-halva" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/suji-halva?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D43113&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Suji Halva</h3>
                                            <h5><em>Cook Time :</em> 12 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/egg-pudding" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/egg-pudding?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40146&q=low&v=1&m=300&webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Egg Pudding</h3>
                                            <h5><em>Cook Time :</em> 40 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="/recipes/taler-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/taler-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40100&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Taler Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/patishapta-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/patishapta-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40098&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Patishapta Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="/recipes/dudhchitoy-pitha-recipe" className="individual-recipe-item">
                                        <div className="individual-recipe-block">
                                            <img className="individual-recipe-img" src="https://chaldn.com/_mpimage/dudhchitoy-pitha-recipe?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D40094&amp;q=low&amp;v=1&amp;m=300&amp;webp=1"/>
                                            <div className="individual-recipe-title">
                                            <h3>Dudh Chitoy Pitha</h3>
                                            <h5><em>Cook Time :</em> 60 Mins</h5>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div className="hasMoreRecipeLoading"></div>
                            </div>
                        </section>
                        <footer id="footer" style={{display:'block'}}>
                            <section className="footer-banner">
                                <div className="banner">
                                    <div className="wrap">
                                        <div className="left-area">
                                            <ul>
                                                <li>
                                                    <span></span>
                                                    <span className="icon">
                                                        <span></span>
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/page/BrandComponent/images/1-hour.png?q=low&amp;webp=1&amp;alpha=1"/>
                                                        <span></span>
                                                    </span>
                                                    <span className="text">
                                                        <span></span>
                                                        <span>30 minute delivery</span>
                                                        <span></span>
                                                    </span>
                                                    <span></span>
                                                </li>
                                                <li>
                                                    <span></span>
                                                    <span className="icon">
                                                        <span></span>
                                                        <img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/stores/chaldal/components/page/BrandComponent/images/cash-on-delivery.png?q=low&amp;webp=1&amp;alpha=1"/>
                                                        <span></span>
                                                    </span>
                                                    <span className="text">
                                                        <span></span>
                                                        <span>Cash on delivery</span>
                                                        <span></span>
                                                    </span>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="right-area">
                                            <ul>
                                                <li className="text">Pay with</li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Amex.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/mastercard.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/VIsa.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon bkash"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/bkash.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon bkash"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/NagadLogo.png?q=low&amp;webp=1&amp;alpha=1"/></li>
                                                <li className="icon cod"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/COD.png?v=1&amp;q=low&amp;webp=1&amp;alpha=1"/></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div className="footer-left">
                                <div className="footerTop">
                                    <h2 className="footerLogo">
                                        <img className="chaldal_logo" style={{backgroundImage:'url(https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/header/Header/images/logo-small.png?q=low&amp;webp=1&amp;alpha=1)', backgroundRepeat:'no-repeat'}} src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="Chaldal logo"/>
                                    </h2>
                                    <span>Chaldal.com is an online shop available in Dhaka, Chattogram and Jashore. We believe time is valuable to our fellow residents, and that they should not have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Chaldal delivers everything you need right at your door-step and at no additional cost.</span>
                                </div>
                                <div className="footerBottom">
                                    <div className="list-type customer-service">
                                        <p><span></span><span>Customer Service</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/t/ContactUs">Contact Us</a></li>
                                            <li><a href="/recipes/t/Help">FAQ</a></li><span></span>
                                        </ul>
                                    </div>
                                    <div className="list-type customer-service">
                                        <p><span></span><span>About Chaldal</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/t/PrivacyInfo">Privacy Policy</a></li>
                                            <li><a href="/recipes/t/TermsOfUse">Terms of Use</a></li><span></span>
                                        </ul>
                                    </div>
                                    <div className="list-type customer-service">
                                        <p><span></span><span>For Business</span><span></span></p>
                                        <ul><span></span>
                                            <li><a href="/recipes/corporate">Corporate</a></li><span></span>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-right">
                                <div className="app-download-section">
                                    <div className="wrap">
                                        <div className="google_play_store"><a href="https://play.google.com/store/apps/details?id=com.chaldal.poached"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/google_play_store.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></div>
                                        <div className="app_store"><a href="https://itunes.apple.com/us/app/chaldal-online-grocery/id1104493220"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/app_store.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></div>
                                    </div>
                                </div>
                                <div className="contact-section">
                                    <div className="phone-number">
                                        <div className="wrap"><span className="phone-icon"><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/phone_icon.png?q=low&amp;webp=1&amp;alpha=1"/></span><span className="number"><span>16710</span></span></div>
                                    </div>
                                    <div className="email-address">
                                        <span className="pre-text">or </span><span className="email">support@chaldal.com</span>
                                    </div>
                                </div>
                                <div className="social-section">
                                    <ul>
                                        <li><a href="https://www.facebook.com/chaldalcom" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Facebook.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></li>
                                        <li><a href="https://twitter.com/Chaldal" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/twitter.png?q=low&webp=1&alpha=1"/><span></span></a></li>
                                        <li><a href="https://www.instagram.com/chaldal/" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Instagram.png?q=low&amp;webp=1&amp;alpha=1"/><span></span></a></li>
                                        <li><a href="https://www.linkedin.com/company/chaldal/" target="_blank"><span></span><img src="https://chaldn.com/asset/Egg.ChaldalWeb.Fabric/Egg.ChaldalWeb1/1.0.0-Deploy-Release-512/Default/components/shared/NewFooter/images/Youtube.png?q=low&webp=1&alpha=1"/><span></span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </footer>


                    </div>
                </div>
            </section>
        </div>
    </Link>
  );
};

export default Recipe;

