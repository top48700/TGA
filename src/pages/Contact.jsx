import MapComponent from '../components/MapComponent';
import '../components/css/Contact.css'

function Contact() {

    const addressLines = [
        'เลขที่ 988/136 ถนนรามอินทรา แขวงคันนายาว',
        'เขตคันนายาว กรุงเทพฯ 10230',
        'No. 988/136 Ram-intra Rd. Khannayao ,',
        'Khannayao , Bangkok Thailand 10230',
        'Tel.: 02-9179683-5, Fax 02-9179682',
        'Email : services@tgaccounting.co.th'
    ];

    return (
        <>
            <h1 style={{ color: '#056839' }} className='contact-us'>ติดต่อเรา</h1>
            <div className="contact">

                <div className="contact-info">
                    <h2 style={{ color: '#056839' }}>บริษัท ทริปเปิ้ล กรีน การบัญชี จำกัด</h2>
                    {addressLines.map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>

                <div className='map-wrapper'>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d968.6190118923337!2d100.694762!3d13.810429!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d63e4a9903ed5%3A0x49629d88083179c5!2zVEdBIC0g4LiX4Lij4Li04Lib4LmA4Lib4Li04LmJ4LilIOC4geC4o-C4teC4mSDguIHguLLguKPguJrguLHguI3guIrguLU!5e0!3m2!1sen!2sus!4v1753439274122!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
} export default Contact;