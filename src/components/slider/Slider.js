import Slider from 'react-slick';

// Components //
import SingleItem from './SingleItem';

// Styles //
import 'slick-carousel/slick/slick-theme.scss';
import 'slick-carousel/slick/slick.scss';

// Slider Settings //
import { sliderSettings } from '../../config/slider.settings';

// Slider data //
import Banners from './Slider.data';

const index = () => {
    return (
        <Slider {...sliderSettings}>
            {Banners &&
                Banners.map(({ src, label }, i) => (
                    <SingleItem key={i} src={`${src}${i}`} label={label} />
                ))}
            {/* <img src="https://picsum.photos/1600/600?random=1" alt="" />
            <img src="https://picsum.photos/1600/600?random=2" alt="" />
            <img src="https://picsum.photos/1600/600?random=3" alt="" /> */}
        </Slider>
    );
};

export default index;
