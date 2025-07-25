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
                    <MapComponent />
                </div>
            </div>
        </>
    )
} export default Contact;