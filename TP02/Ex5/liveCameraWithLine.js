var canvas = document.getElementById('canvas');
         var video = document.getElementById('video');
         var button = document.getElementById('button');
         var context = canvas.getContext('2d');

         navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
         }).then((stream) => {
            video.srcObject = stream;
         }).catch((err) => {
            console.log('navigator.MediaDevices.getUserMedia error: ', err.message, err.name);
         });

        var playing = false;
        const start = () =>{
            
            if(playing){
                // console.log(Video);
                video.play()
                const w = video.videoWidth;
                const h = video.videoHeight;
                const nh = (h/w)*canvas.width;
                        // console.log(nh);    
                canvas.height = nh;
                context.drawImage(video,0,0,canvas.width,canvas.height)
                setTimeout(start,1000/30)

            }
        }

         button.addEventListener('click',() => {
            // alert('Hello Dear!');
            playing = playing?false:true;
            start()
            button.innerText = playing?"Pause":"Start";
         })