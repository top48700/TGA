import introduce from '../assets/home-introduce.jpg'
import { useState, useRef, useEffect } from 'react';
import '../components/css/Home.css'
import T1 from '/tax-1.jpg'
import T2 from '/tex-2.jpg'
import T3 from '/tax-3.jpg'
import T4 from '/tax-4.jpg'
import T5 from '/tax-5.jpg'
import P1 from '/lrd-1.jpg'
import P2 from '/lrd-2.jpg'
import P3 from '/lrd-3.jpg'
import P4 from '/lrd-4.jpg'

function Home() {
    const [selectedService, setSelectedService] = useState(null);

    const partners = [
        { src: P1, alt: 'กระทรวงแรงงาน' },
        { src: P2, alt: 'กรมพัฒนาธุรกิจการค้า' },
        { src: P3, alt: 'กรมสรรพากร' },
        { src: P4, alt: 'สำนักงานประกันสังคม' },
        { src: P1, alt: 'กระทรวงแรงงาน' },
        { src: P2, alt: 'กรมพัฒนาธุรกิจการค้า' },
        { src: P3, alt: 'กรมสรรพากร' },
        { src: P4, alt: 'สำนักงานประกันสังคม' },
    ];

    const [isExpanded, setIsExpanded] = useState(false);
    const detailRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(prev => !prev);
    };

    const [index, setIndex] = useState(0);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % partners.length);
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + partners.length) % partners.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    // แสดง 3 รูปพร้อมกัน
    const visiblePartners = [
        partners[index],
        partners[(index + 1) % partners.length],
        partners[(index + 2) % partners.length],
    ];
    

    return (
        <>
            <section className="introduce">
                <div className="intro-content">
                    <img src={introduce} className="intro-img" />
                    <div className="intro-txt">
                        <h1>เป็นสำนักงานบัญชี ที่ให้บริการด้าน</h1>
                        <h1>การจัดทำบัญชี และภาษีอากรแบบครบวงจร</h1>
                        <h1 style={{ color: 'green' }}>TRIPLE GREEN ACCCOUNTING</h1>
                        <button className='btn-intro'>More detail...</button>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-bg">
                    <h1 style={{ color: 'white' }} className="txt-about">เกี่ยวกับเรา TGA</h1>
                    <div
                        ref={detailRef}
                        className={`about-detail ${isExpanded ? 'expanded' : ''}`}
                        style={{
                            maxHeight: isExpanded ? `${detailRef.current?.scrollHeight}px` : '0px',
                            opacity: isExpanded ? 1 : 0,
                        }}
                    >
                        <p>บริษัท ทริปเปิ้ล กรีน การบัญชี จำกัด</p>
                        <p>เป็นสำนักงานบัญชี ที่ให้บริการด้านการจัดทำบัญชี และภาษีอากรแบบครบวงจร ตามมาตรฐานการบัญชีที่รับรองทั่วไป</p>
                        <p>โดยทีมผู้ทำบัญชีที่มีประสบการณ์ ซึ่งรวมถึง การให้บริการวางระบบบัญชี ให้คำปรึกษาทางด้านบัญชี ด้านภาษีอากร</p>
                        <p>และให้บริการจดทะเบียนธุรกิจทุกชนิดอย่างมีคุณภาพและมีประสิทธิภาพสูง</p>
                        <p>โดยทีมงานมืออาชีพที่มีความรู้เฉพาะทางเป็นอย่างดี</p>
                        <p>มีประสบการณ์และความชำนาญในงานที่ให้บริการแต่ละด้านโดยตรง</p>
                    </div>
                    <button className="btn-about" onClick={toggleExpand}>
                        {isExpanded ? 'Less detail...' : 'More detail...'}
                    </button>
                </div>
            </section>

            <section className="service">
                <div className='our-service'>
                    <div className="left-dialog">
                        {selectedService ? (
                            <div key={selectedService.title} className="service-display fade-in">
                                <h2 className="service-title">{selectedService.title}</h2>

                                {Array.isArray(selectedService.detail) ? (
                                    <ul className="bullet-list">
                                        {selectedService.detail.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{selectedService.detail}</p>
                                )}

                                <img src={selectedService.image} alt={selectedService.title} className="preview-img" />
                            </div>
                        ) : (
                            <h1>บริการของเรา</h1>
                        )}
                    </div>



                    <div className='v1'></div>
                    <div className='right-dialog'>
                        <div className="service-wrapper">
                            <div className="service-card" onClick={() => setSelectedService({
                            title: 'บริการด้านวางระบบบัญชี',
                            detail: [
                                'เพื่อให้การบริหารจัดการงานเอกสารมีระบบที่ชัดเจน',
                                'เพื่อให้สามารถลดขั้นตอนของเอกสารบางส่วนที่ซ้ำซ้อน',
                                'เพื่อให้สามารถควบคุมบริหารจัดการงานได้อย่างมีประสิทธิภาพยิ่งขึ้น',
                                'เพื่อป้องกันการทุจริต และสามารถตรวจสอบได้ง่าย',
                                'เพื่อลดค่าใช้จ่ายบุคลากรที่เกินความจำเป็น',
                            ],
                            image: T1
                        })}>
                            <div className='img-container'>
                                <img src={T1} alt="" />
                            </div>
                            <div className="detail">
                                <h3>บริการด้านวางระบบบัญชี</h3>
                                <p></p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="service-wrapper">
                            <div className="service-card" onClick={() => setSelectedService({
                            title: 'บริการด้านภาษีอากร',
                            detail: [
                                'บริการยื่นแบบภาษีเงินได้ทุกชนิดที่เกี่ยวข้องกับธุรกิจ (ภ.ง.ด. 1, 3, 53, 54, 51, 50, 90, 91, 94)',
                                'บริการยื่นภาษีมูลค่าเพิ่ม ภาษีธุรกิจเฉพาะทุกชนิดที่เกี่ยวข้องกับธุรกิจ (ภ.พ. 30, 36, ภ.ธ. 40)',
                                'บริการยื่นแบบภาษีโรงเรือนทุกชนิดที่เกี่ยวข้องกับธุรกิจ (โรงเรือนเป็นของกิจการเท่านั้น)',
                                'บริการยื่นแบบประกันสังคม และกองทุนเงินทดแทนที่กระทรวงแรงงานและสวัสดิการสังคม',
                                'รวบรวมจัดเก็บเอกสารและบันทึกบัญชีซื้อ – ขาย, รับ – จ่าย, ลูกหนี้ – เจ้าหนี้, รายวันทั่วไป – แยกประเภท รวมเป็นชุดสมุดบัญชี',
                                'ทำการปิดบัญชีเพื่อจัดทำงบแสดงฐานะการเงิน งบกำไรขาดทุน เมื่อสิ้นงวดบัญชี',
                                'จัดหาผู้สอบบัญชี เพื่อตรวจสอบให้ตรงตามมาตรฐานการสอบบัญชีทั่วไป พร้อมทั้งนำส่งงบการเงินให้ทันตามเวลาที่กำหนดไว้ในระเบียบ',
                                'ดูแลการเปลี่ยนแปลงระเบียบวิธีการของกรมสรรพากร และคอยแจ้งให้ผู้ดำเนินธุรกิจทราบเพื่อเสียภาษีให้ถูกวิธี '
                            ],
                            image: T2
                        })}>

                            <div className='img-container'>
                                <img src={T2} alt="" />
                            </div>
                            <div className="detail">
                                <h3>บริการด้านภาษีอากร</h3>
                                <p></p>
                            </div>
                        </div>
                        </div>
                        
                        <div className="service-wrapper">
                            <div className="service-card" onClick={() => setSelectedService({
                            title: 'บริการด้านบัญชี',
                            detail: [
                                'บริการยื่นแบบภาษีเงินได้ทุกชนิดที่เกี่ยวข้องกับธุรกิจ (ภ.ง.ด. 1, 3, 53, 54, 51, 50, 90, 91, 94)',
                                'บริการยื่นภาษีมูลค่าเพิ่ม ภาษีธุรกิจเฉพาะทุกชนิดที่เกี่ยวข้องกับธุรกิจ (ภ.พ. 30, 36, ภ.ธ. 40)',
                                'บริการยื่นแบบภาษีโรงเรือนทุกชนิดที่เกี่ยวข้องกับธุรกิจ (โรงเรือนเป็นของกิจการเท่านั้น)',
                                'บริการยื่นแบบประกันสังคม และกองทุนเงินทดแทนที่กระทรวงแรงงานและสวัสดิการสังคม',
                                'รวบรวมจัดเก็บเอกสารและบันทึกบัญชีซื้อ – ขาย, รับ – จ่าย, ลูกหนี้ – เจ้าหนี้, รายวันทั่วไป – แยกประเภท รวมเป็นชุดสมุดบัญชี',
                                'ทำการปิดบัญชีเพื่อจัดทำงบแสดงฐานะการเงิน งบกำไรขาดทุน เมื่อสิ้นงวดบัญชี',
                                'จัดหาผู้สอบบัญชี เพื่อตรวจสอบให้ตรงตามมาตรฐานการสอบบัญชีทั่วไป พร้อมทั้งนำส่งงบการเงินให้ทันตามเวลาที่กำหนดไว้ในระเบียบ',
                                'ดูแลการเปลี่ยนแปลงระเบียบวิธีการของกรมสรรพากร และคอยแจ้งให้ผู้ดำเนินธุรกิจทราบเพื่อเสียภาษีให้ถูกวิธี '
                            ],
                            image: T3
                        })}>
                            <div className='img-container'>
                                <img src={T3} alt="" />
                            </div>
                            <div className="detail">
                                <h3>บริการด้านบัญชี</h3>
                                <p></p>
                            </div>
                        </div>
                        </div>
                        <div className="service-wrapper">
                            <div className="service-card" onClick={() => setSelectedService({
                            title: 'บริการจดทะเบียนบริษัท',
                            detail: [
                                'หากท่านอยากมีธุรกิจเป็นของตนเองจะจดทะเบียนธุรกิจทางเรามีบริการครบวงจร',
                                'จดเครื่องหมายการค้า',
                                'จดทะเบียนจัดตั้ง, เปลี่ยนแปลง, และเลิก ทั้งในรูปแบบบริษัท, ห้างหุ้นส่วน, ร้าน',
                                'จดทะเบียนจัดตั้ง, เปลี่ยนแปลง, และเลิก ทะเบียนมูลค่าเพิ่ม',
                                'ขึ้นทะเบียนประกันสังคม ทั้งนายจ้างและลูกจ้าง',
                                'จดทะเบียนใบอนุญาตโรงงาน',
                                'จดทะเบียนใบอนุญาตส่งเสริมการลงทุน (BOI)',
                                'จดทะเบียน, ขอใหม่, ต่ออายุ, เปลี่ยนแปลงใบอนุญาตทำงานคนต่างด้าวและวีซ่า (Work permit and Visa)'
                            ],
                            image: T4
                        })}>
                            <div className='img-container'>
                                <img src={T4} alt="" />
                            </div>
                            <div className="detail">
                                <h3>บริการจดทะเบียนบริษัท</h3>
                                <p></p>
                            </div>
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
            <section className="partner">
            <h2 className='partner-h2'>Our Partner</h2>
            <div className="partner-wrapper">
                <button onClick={handlePrev}>{'<'}</button>
                <div className="partner-logos">
                    {visiblePartners.map((partner, idx) => (
                        <img key={idx} src={partner.src} alt={partner.alt} />
                    ))}
                </div>
                <button onClick={handleNext}>{'>'}</button>
            </div>
        </section>

        </>
    )
} export default Home;