const videoEl = document.querySelector('#video');
const button = document.querySelector('.btn');

const getMediaStream = async function() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject= mediaStream;
    videoEl.play();
  } catch(err) {
    console.log('oops, error here:', err)
  }
}

button.addEventListener('click', async () => {
  try{
    // disabled button true
    button.disabled = true;

    // request picture in picture mode
    await videoEl.requestPictureInPicture();

    // disabled button false
    button.disabled = false;

    // hide video el
    videoEl.hidden = true;
  } catch(err){
    console.log(err);
  }
})

getMediaStream();