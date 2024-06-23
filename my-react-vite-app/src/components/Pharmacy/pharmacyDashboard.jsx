import React, { useState, useEffect, useRef } from 'react';
import Header_ph from './Header_ph';
import './css/dash_phr.css';


const pharmacyDashboard = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
  

    return(
        <div className='dashboard-container'>
            <Header_ph />

            <div className='compress' style={{ width: isSidebarOpen ? '100%' : '100%', marginLeft: isSidebarOpen ? '10%' : '0%', transition: 'width 0.3s ease, margin-left 0.3s ease' }}>

                
    <section className="bodyTable">
  <div>
    <div className="catalogBrowser">
      <div className="loaded">
        <div>
          <div className="frontPageBanners appBanners">
            <section className="squareSlider card">
              <div className="fade-carousel-container">
                <a href="/pharmacy/customer/prescription">
                  <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116255&amp;q=best&amp;v=1&amp;m=300&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                </a>
              </div>
            </section>
            <section className="landingPageSlider">
              <div className="right-Top-Banners card">
                <div className="fade-carousel-container">
                  <a href="/pharmacy/common-conditions?utm_source=CH_H3&amp;utm_campaign=BMSpecialJ26">
                    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D156709&amp;q=best&amp;v=1&amp;m=910&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                  </a>
                </div>
              </div>
              <div className="right-bottom-images card">
                <div className="fade-carousel-container">
                  <a href="/pharmacy/all-meds">
                    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153673&amp;q=best&amp;v=1&amp;m=910&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                  </a>
                </div>
              </div>
            </section>
          </div>
          <section className="bodyWrapper">
            <div className="categoryHeader">
              <ol className="breadcrumb" itemscope="" itemtype="http://schema.org/BreadcrumbList">
                <li itemprop="itemListElement" itemscope="" itemtype="http://schema.org/ListItem" className="crumb selected">
                  <a href="/pharmacy/common-conditions" itemtype="http://schema.org/Thing" itemprop="item" id="Common Conditions" itemscope="">
                    <span itemprop="name">Common Conditions</span>
                  </a>
                </li>
              </ol>
              <div></div>
            </div>


            
            <div className="category-blocks-wrapper">
              <div className="category-links-wrapper">
                <a href="/pharmacy/cough-cold-flu" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/cough-cold-flu?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106037&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Cough, Cold &amp; Flu"/>
                    </div>
                    <div className="name">Cough, Cold &amp; Flu</div>
                  </div>
                </a>
                <a href="/pharmacy/all-meds" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/all-meds?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106031&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="All Meds"/>
                    </div>
                    <div className="name">All Meds</div>
                  </div>
                </a>
                <a href="/pharmacy/fever-pain" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/fever-pain?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106032&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Fever &amp; Pain"/>
                    </div>
                    <div className="name">Fever &amp; Pain</div>
                  </div>
                </a>
                <a href="/pharmacy/diabetes" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/diabetes?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106033&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Diabetes"/>
                    </div>
                    <div className="name">Diabetes</div>
                  </div>
                </a>
                <a href="/pharmacy/eye-ear" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/eye-ear?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106034&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Eye &amp; Ear"/>
                    </div>
                    <div className="name">Eye &amp; Ear</div>
                  </div>
                </a>
                <a href="/pharmacy/digestive-health" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/digestive-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106035&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Digestive Health"/>
                    </div>
                    <div className="name">Digestive Health</div>
                  </div>
                </a>
                <a href="/pharmacy/allergy-asthma" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/allergy-asthma?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106036&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Allergy &amp; Asthma"/>
                    </div>
                    <div className="name">Allergy &amp; Asthma</div>
                  </div>
                </a>
                <a href="/pharmacy/blood-pressure-heart-disease" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/blood-pressure-heart-disease?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106038&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Blood Pressure &amp; Heart  Disease"/>
                    </div>
                    <div className="name">Blood Pressure &amp; Heart  Disease</div>
                  </div>
                </a>
                <a href="/pharmacy/skin-hair-condition" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/skin-hair-condition?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106040&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Skin &amp; Hair Condition"/>
                    </div>
                    <div className="name">Skin &amp; Hair Condition</div>
                  </div>
                </a>
                <a href="/pharmacy/infection" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/infection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106039&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Infection"/>
                    </div>
                    <div className="name">Infection</div>
                  </div>
                </a>
                <a href="/pharmacy/women-health" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/women-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106041&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Women's Health"/>
                    </div>
                    <div className="name">Women's Health</div>
                  </div>
                </a>
                <a href="/pharmacy/child-health-care" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/child-health-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106042&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Child Health Care"/>
                    </div>
                    <div className="name">Child Health Care</div>
                  </div>
                </a>
                <a href="/pharmacy/vitamins-supplements" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/vitamins-supplements?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106043&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Vitamins &amp; Supplements"/>
                    </div>
                    <div className="name">Vitamins &amp; Supplements</div>
                  </div>
                </a>
                <a href="/pharmacy/diet-fitness" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/diet-fitness?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106044&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Diet &amp; Fitness"/>
                    </div>
                    <div className="name">Diet &amp; Fitness</div>
                  </div>
                </a>
                <a href="/pharmacy/personal-care" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/personal-care?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106045&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Personal Care"/>
                    </div>
                    <div className="name">Personal Care</div>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</section>
            </div>
        </div>

    );
};

export default pharmacyDashboard;
