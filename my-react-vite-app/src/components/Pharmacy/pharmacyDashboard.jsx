import React, { useState, useEffect, useRef } from 'react';
import Header_ph from './Header_ph';
import './css/dash_phr.css';


const pharmacyDashboard = () =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const logoRef = useRef(null);
    const searchBarRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
  
  
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
                <span  href="/pharmacy/customer/prescription">
                  <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D116255&amp;q=best&amp;v=1&amp;m=300&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                </span>
              </div>
            </section>
            <section className="landingPageSlider">
              <div className="right-Top-Banners card">
                <div className="fade-carousel-container">
                  <span  href="/pharmacy/common-conditions?utm_source=CH_H3&amp;utm_campaign=BMSpecialJ26">
                    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D156709&amp;q=best&amp;v=1&amp;m=910&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                  </span>
                </div>
              </div>
              <div className="right-bottom-images card">
                <div className="fade-carousel-container">
                  <span  href="/pharmacy/all-meds">
                    <img src="https://chaldn.com/_mpimage?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D153673&amp;q=best&amp;v=1&amp;m=910&amp;webp=1"  style={{ backgroundColor: 'transparent' }}/>
                  </span>
                </div>
              </div>
            </section>
          </div>
          <section className="bodyWrapper">
            <div className="categoryHeader">
              <ol className="breadcrumb" itemScope="" itemType="http://schema.org/BreadcrumbList">
                <li itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem" className="crumb selected">
                  <span  href="/pharmacy/common-conditions" itemType="http://schema.org/Thing" itemProp="item" id="Common Conditions" itemScope="">
                    <span itemProp="name">Common Conditions</span>
                  </span>
                </li>
              </ol>
              <div></div>
            </div>


            
            <div className="category-blocks-wrapper">
              <div className="category-links-wrapper">
                <span  href="/pharmacy/cough-cold-flu" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/cough-cold-flu?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106037&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Cough, Cold &amp; Flu"/>
                    </div>
                    <div className="name">Cough, Cold &amp; Flu</div>
                  </div>
                </span>
                <span  href="/pharmacy/all-meds" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/all-meds?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106031&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="All Meds"/>
                    </div>
                    <div className="name">All Meds</div>
                  </div>
                </span>
                <span  href="/pharmacy/fever-pain" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/fever-pain?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106032&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Fever &amp; Pain"/>
                    </div>
                    <div className="name">Fever &amp; Pain</div>
                  </div>
                </span>
                <span  href="/pharmacy/diabetes" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/diabetes?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106033&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Diabetes"/>
                    </div>
                    <div className="name">Diabetes</div>
                  </div>
                </span>
                <span  href="/pharmacy/eye-ear" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/eye-ear?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106034&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Eye &amp; Ear"/>
                    </div>
                    <div className="name">Eye &amp; Ear</div>
                  </div>
                </span>
                <span  href="/pharmacy/digestive-health" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/digestive-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106035&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Digestive Health"/>
                    </div>
                    <div className="name">Digestive Health</div>
                  </div>
                </span>
                <span  href="/pharmacy/allergy-asthma" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/allergy-asthma?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106036&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Allergy &amp; Asthma"/>
                    </div>
                    <div className="name">Allergy &amp; Asthma</div>
                  </div>
                </span>
                <span  href="/pharmacy/blood-pressure-heart-disease" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/blood-pressure-heart-disease?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106038&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Blood Pressure &amp; Heart  Disease"/>
                    </div>
                    <div className="name">Blood Pressure &amp; Heart  Disease</div>
                  </div>
                </span>
                <span  href="/pharmacy/skin-hair-condition" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/skin-hair-condition?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106040&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Skin &amp; Hair Condition"/>
                    </div>
                    <div className="name">Skin &amp; Hair Condition</div>
                  </div>
                </span>
                <span  href="/pharmacy/infection" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/infection?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106039&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Infection"/>
                    </div>
                    <div className="name">Infection</div>
                  </div>
                </span>
                <span  href="/pharmacy/women-health" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/women-health?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D106041&amp;q=low&amp;v=1&amp;m=400&amp;webp=1" alt="Women's Health"/>
                    </div>
                    <div className="name">Neurological Conditions</div>
                  </div>
                </span>
                <span  href="/pharmacy/child-health-care" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/insulin?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D152082&q=low&v=1&m=400&webp=1"/>
                    </div>
                    <div className="name">Insulin</div>
                  </div>
                </span>
                <span  href="/pharmacy/vitamins-supplements" className="category">
                  <div>
                    <div className="imageWrapper">
                      <img src="https://chaldn.com/_mpimage/herbal?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D154010&q=low&v=1&m=400&webp=1"/>
                    </div>
                    <div className="name">Herbal</div>
                  </div>
                </span>
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
