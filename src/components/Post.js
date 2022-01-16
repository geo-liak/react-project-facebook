import { useEffect, useState } from "react";
import '../css/App.css';
import logo from '../data/img/logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faShareAltSquare, faShareAlt, faShare, faCommentDots } from '@fortawesome/free-solid-svg-icons';


export default function Post(props) {

  const [like, setLike] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [firstRender, setFirstRender] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [content, setContent] = useState('');
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const [ratio, setRatio] = useState();
  const [expanderVisible, setExpanderVisible] = useState(true);

  let picture = new Image().onload = () => {
    setHeight(picture.height);
    setWidth(picture.width);
    setRatio((picture.width / picture.height));
  }

  picture.src = props.img;

  const handleClick = (e) => {
    console.log('Button \'' + e.target.innerText + '\' was clicked.');
  }

  const handleTextVisibility = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLikeClick = () => {
    setLike(!like);
  }

  const createFullLengthPost = () => {
    let t = [];
    (props.content.map((paragraph, index) => {
      t.push(<p key={index}>{paragraph}</p>);
    }));
    setContent(t);
  }

  const createPartialLengthPost = () => {
    let countchars = 0;
    let contentParagraphs = [];
    props.content.map((paragraph, index) => {
      if (countchars <= 279) {
        if (countchars + paragraph.length <= 280) {
          contentParagraphs.push(<p key={index}>{paragraph}</p>);
          countchars += paragraph.length;
        } else {
          let breakpoint = paragraph.indexOf(' ', (280 - countchars));
          let partialText = paragraph.substring(0, breakpoint);
          if (partialText.length > 0) {
            countchars += partialText.length;
            partialText = partialText + '...';
          }
          contentParagraphs.push(<p key={index}>{partialText}</p>)
        }
      }
      setContent(contentParagraphs);
    })
  }

  useEffect(() => {

    handleResize();
    createPartialLengthPost();

    let postTotalCharacters = 0;
    props.content.map(paragraph => {
      postTotalCharacters += paragraph.length;
    })

    if (postTotalCharacters <= 280) {
      setExpanderVisible(false);
    }

    setFirstRender(false);
  }, []);



  useEffect(() => {
    if (!firstRender) {
      if (isExpanded) {
        createFullLengthPost();
      } else {
        createPartialLengthPost();
      }
    }
  }, [isExpanded]);

  useEffect(() => {
    if (!firstRender) {
      if (like) {
        setLikes(likes + 1);
      } else {
        setLikes(likes - 1);
      }
    }

  }, [like]);

  const handleResize = () => {
    let image = document.getElementById('postImg');
    let parent = image.parentNode;

    if (width !== parent.offsetWidth) {
      setWidth(parent.offsetWidth);
      setHeight(parent.offsetWidth / ratio);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <>
      <div className=" panel panel-default component-bg p-3 border">
        <div className="panel-body row ">
          <div className="col-1">
            <img src={logo} width='50' height='50' />
          </div>
          <div className="col-11">
            <p className="mx-3 h6"><a>PeopleCert</a></p>
            <p className="mx-3 h6 fontsize-small">{props.date}</p>
          </div>
        </div>

        <div className="panel-body">
          <div id="content" className="inline">{content}
            <span onClick={handleTextVisibility} id="expander" type="button" className="btn btn-link pt-0" style={{ "visibility": `${expanderVisible ? 'visible' : 'hidden'}` }}>{isExpanded ? 'Show less' : 'Show more'}</span>
          </div>
          <img id='postImg' src={props.img} width={width} height={height} alt='' />
        </div>

        <div className="panel-body">
          <div className="row">
          </div>
        </div>

        <div className="container ">
          <div className="row ">
            <div className="col-3 pt-3 px-0 text-start">Likes {likes}</div>
            <div className="col-6"></div>
            <div className="col-3 pt-3 px-0 text-end">Shares {props.shares}</div>
          </div>
        </div>
        <hr className="mx-1" />

        <div className="panel-footer">
          {/* The outline has been removed from the 'Like' button. It has been retained on the rest of the buttons since no other visible function has been implemented. When a button is clicked, it is logged in the console.*/}
          <button onClick={handleLikeClick} id='like' className={`btn btn-default col-sm-4 mb-3 shadow-none ${like ? 'like-pressed' : 'btn-outline'}`}>
            <span style={{ paddingRight: '8px' }}>
              <FontAwesomeIcon icon={faThumbsUp} />
            </span>
            Like</button>
          <button onClick={handleClick} id='comment' className="pull-right col-sm-4 btn btn-outline mb-3">
            <span style={{ paddingRight: '8px' }}>
              <FontAwesomeIcon className="" icon={faCommentDots} />
            </span>
            Comment</button>
          <button onClick={handleClick} id='share' className="pull-right col-sm-4 btn btn-outline mb-3">
            <span style={{ paddingRight: '8px' }}>
              <FontAwesomeIcon className="" icon={faShare} />
            </span>
            Share
          </button>
        </div>
      </div>

      <div className="my-2"></div>
    </>
  )
}