import introduce from '../assets/home-introduce.jpg'
import '../components/css/Home.css'
import T1 from '/tax-1.jpg'
import T2 from '/tex-2.jpg'
import T3 from '/tax-3.jpg'
import T4 from '/tax-4.jpg'
import T5 from '/tax-5.jpg'

function Home() {
    return (
        <>
            <section className="introduce">
                <div className="intro-content">
                    <img src={introduce} className="intro-img" />
                    <div className="intro-txt">
                        <h1>เป็นสำนักงานบัญชี ที่ให้บริการด้าน</h1>
                        <h1>การจัดทำบัญชี และภาษีอากรแบบครบวงจร</h1>
                        <h1 style={{ color: 'green'}}>TRIPLE GREEN ACCCOUNTING</h1>
                        <button className='btn-intro'>More detail...</button>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className='about-bg'>
                    <h1 style={{ color: 'white'}} className='txt-about'>เกี่ยวกับเรา TGA</h1>
                    <button className='btn-about'>More detail...</button>
                </div>
            </section>
            <section className="service">
                <div className='our-service'>
                        <div className="left-dialog">
                            <div>
                                <h1>บริการของเรา</h1>
                            </div>
                        </div>
                        <div className='v1'></div>
                        <div className='right-dialog'>
                            <div className="service-card">
                                <div className='img-container'>
                                    <img src={T1}  alt="" />
                                </div>
                                <div className="detail">
                                    <h3>รายละเอียด</h3>
                                    <p></p>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className='img-container'>
                                    <img src={T2} alt="" />
                                </div>
                                <div className="detail">
                                    <h3>รายละเอียด</h3>
                                    <p></p>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className='img-container'>
                                    <img src={T3} alt="" />
                                </div>
                                <div className="detail">
                                    <h3>รายละเอียด</h3>
                                    <p></p>
                                </div>
                            </div>
                            <div className="service-card">
                                <div className='img-container'>
                                    <img src={T4} alt="" />
                                </div>
                                <div className="detail">
                                    <h3>รายละเอียด</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
            <section className="experience">
                <div className='exp-img'>
                    <img src={T5} alt="" />
                    <div className="exp-txt">
                        <h1>เราเป็นผู้นำในธุรกิจการบัญชี</h1>
                        <h1>ประสบการณ์มากกว่า 18 ปี</h1>
                        <h1>ลูกค้ากว่า 200+ ราย</h1>
                        <h1>พนักงานลูกค้า 10,000+ พนักงาน</h1>
                    </div>
                </div>
            </section>
            <section className="customer">

            </section>
        </>
    )
} export default Home;