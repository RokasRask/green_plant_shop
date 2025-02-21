import './ComponentStyles/SectionFooter.css';
import FooterBanner from './FooterBanner';
import SecondMenu from './SecondMenu';
import SocialMenu from './SocialMenu';

export default function SectionFooter() {

    return (
        <section className='footer'>
            <SecondMenu />
            <SocialMenu />
            <FooterBanner />
        </section>
    )
}