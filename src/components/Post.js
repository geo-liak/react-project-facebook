import { useEffect, useState } from "react";
import '../css/App.css';

export default function Post() {
  const props = {
    "id": 1001101,
    "date": "18 December 2019",
    "content": [
      "We are proud to announce that PeopleCert, in partnership with LanguageCert and Prometric, has been awarded a multi-year agreement with UK Visas and Immigration (UKVI) to deliver Home Office approved Secure English Language Tests (SELT) in the UK and globally! LanguageCert SELT exams are scheduled for global rollout in April 2020, catering for all visa type requirements where valid proof of English language ability is required.",

      "Dr Mike Milanovic, Chairman of the LanguageCert Board of Directors commented: “Being chosen as an Approved SELT Provider by UKVI further validates our ability and commitment to the provision of excellence. The agreement with UKVI spearheads a new era for secure, innovative and user-friendly English language exams for those seeking to live, study and work in the UK. We are delighted with the outcome and look forward to our global rollout in April 2020!”.",

      "Stay tuned for more information!",

      "Read more in the Press Release: http: //bit.ly/2tpHycs 8 shares"
    ],
    "likes": 72,
    "shares": 0,
    "tags": [],
    "img": "https://raw.githubusercontent.com/kostasx/EventLoop/master/Miscellaneous/exercises/react/facebook/1.jpg"
  };

  const [like, toggleLike] = useState(false);
  const [likes, setLikes] = useState(props.likes);
  const [firstRender, setFirstRender] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const handleLikeClick = () => {
    toggleLike(!like);
  }

  useEffect(() => {
    console.log(like);
    if (!firstRender) {
      if (like) {
        document.getElementById('like').classList.add('btn-primary');
        document.getElementById('like').classList.remove('btn-outline-secondary');
        setLikes(likes + 1);
      } else {
        document.getElementById('like').classList.remove('btn-primary');
        document.getElementById('like').classList.add('btn-outline-secondary');
        setLikes(likes - 1);
      }
    }

  }, [like]);

  const handleResize = () => {
    let image = document.getElementById('postImg');
    let parent = image.parentNode;
    const imageRatio = image.width / image.height;

    if (image.width !== parent.offsetWidth) {
      image.width = parent.offsetWidth;
      image.height = (parent.offsetWidth / imageRatio);
    }
  }

  const handleTextVisibility = () => {
    let content = document.getElementById('content');
    console.log('expanded: ' + expanded)
    if (!expanded) {
      content.innerHTML = '';

      (props.content.map((paragraph) => {
        let newParagraph = document.createElement('p');
        newParagraph.appendChild(document.createTextNode(paragraph));
        content.appendChild(newParagraph);
      }))
    }     else {
      let breakpoint = content.innerText.indexOf(' ', 280);
      let contentText = content.innerText.substring(0, breakpoint) + '...';
      content.innerText = contentText;
    }
    setExpanded(!expanded);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    handleResize();

    let content = document.getElementById('content');
    let totalChars = content.innerText.length;

    if (totalChars <= 280) {
      document.getElementById('expander').style.visibility = 'hidden';
    }

    if (totalChars > 280) {
      let breakpoint = content.innerText.indexOf(' ', 280);
      let contentText = content.innerText.substring(0, breakpoint) + '...';
      content.innerText = contentText;
    }

    let contentText = document.getElementById('content').innerText;

    setFirstRender(false);
  }, []);

  return (
    <>
      <div className="container" >
        <div className="row">
          <div className="col-md-3 border">ARISTERA</div>
          <div className="col-md-6 border">
            KENTRO
            <div className=" panel panel-default">
              <div className="panel-body row">
                <div className="col-1">
                  <img src={props.img} width='50' height='50' />
                </div>
                <div className="col-11">
                  <p className="mx-3 h6">PeopleCert</p>
                  <p className="mx-3 h6">{props.date}</p>
                </div>
              </div>

              <div className="panel-body">
                <div id="content" className="inline">{props.content.map((paragraph) => { return (<p>{paragraph}</p>) })}
                </div>
                <span onClick={handleTextVisibility} id="expander" type="button" className="btn btn-link pt-0">{expanded ? 'Show less' : 'Show more'}</span>
                <img id='postImg' src={props.img} />
              </div>

              <div className="panel-body">
                <div className="row">
                </div>
              </div>

              <div className="container ">
                <div className="row ">
                  <div className="col-sm-2 pt-3">Likes {likes}</div>
                  <div className="col-sm-8"></div>
                  <div className="col-sm-2 pt-3">Shares {props.shares}</div>
                </div>
              </div>
              <hr className="" />

              <div className="panel-footer">
                <button onClick={handleLikeClick} id='like' className="btn btn-default col-sm-4 btn-outline-secondary">Like</button>
                <button id='comment' className="pull-right col-sm-4 btn btn-outline-secondary">Comment</button>
                <button id='share' className="pull-right col-sm-4 btn btn-outline-secondary">Share</button>
              </div>
            </div>
          </div>
          <div className="col-md-3 border"> DEXIA</div>

        </div>
      </div>
      <div className="my-5"></div>
    </>
  )
}