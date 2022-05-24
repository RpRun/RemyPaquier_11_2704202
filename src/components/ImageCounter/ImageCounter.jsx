import './ImageCounter.scss';

const ImageCounter = ({index, text}) => {
 
  return <span className="imageCounter">
     {index}/{text}
    </span>
};

export default ImageCounter
