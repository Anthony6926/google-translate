import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

function App() {
  const[options,setOptions]=useState([])
  const [to,setTo]=useState("en");
  const [from,setFrom]=useState("en");
  const [input,setInput]=useState("");
  const [output,setOutput]=useState("");
  const [origin,setOrigin]=useState("");
  const [origin1,setOrigin1]=useState("");
  const [classAnimation,setClassAnimation]=useState("");

  const love=[
    'As he read, I fell in love the way you fall asleep: slowly, and then all at once.',
    'Loved you yesterday, love you still, always have, always will.',
    'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
    'I love you not only for what you are, but for what I am when I am with you. I love you not only for what you have made of yourself, but for what you are making of me. I love you for the part of me that you bring out.',
    'Thinking of you keeps me awake. Dreaming of you keeps me asleep. Being with you keeps me alive.',
    'I need you like a heart needs a beat.',
    'You call it madness, but I call it love.',
    'We can only learn to love by loving.',
    'A life lived in love will never be dull.',
    'Life is the flower for which love is the honey.',
    'All you need is love.',
    'True love stories never have endings.',
    'Love is like the wind, you can’t see it but you can feel it.',
    'My wish is that you may be loved to the point of madness.',
    'Love is shown more in deeds than in words.',
    'Love is not a volunteer thing.',
    'Love is friendship on fire.',
    'Love is the ultimate expression of the will to live.',
    'Love is what makes the ride worthwhile.',
    'The love we give away is the only love we keep.',
    'Tell me whom you love and I will tell you who you are.',
    'Trust your intuition and be guided by love.',
    'That’s all nonviolence is – organized love.',
    'We love because it’s the only true adventure.',
    'I saw that you were perfect, and so I loved you',
    'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.',
    'Love is that condition in which the happiness of another person is essential to your own.',
    'The best thing to hold onto in life is each other.',
    'I need you like a heart needs a beat.',
    'I am who I am because of you. You are every reason, every hope, and every dream I’ve ever had.',
    'If I had a flower for every time I thought of you… I could walk through my garden forever.',
    'Take my hand, take my whole life too. For I can’t help falling in love with you.',
    'If you live to be a hundred, I want to live to be a hundred minus one day so I never have to live without you.',
    'You’re the closest to heaven, that I’ll ever be.',
    'You are the finest, loveliest, tenderest, and most beautiful person I have ever known and even that is an understatement.',
    'It’s always better when we’re together.',
    'I love you for all that you are, all that you have been and all that you will be.',
    'to the world you may be one person, but to one person you are the world.',
    'I’ve tried so many times to think of a new way to say it, and it’s still I love you.',
    'I love you and that’s the beginning and end of everything.',
    'If I know what love is, it is because of you.',
    'My soul and your soul are forever tangled.',
    'I love you more than I have ever found a way to say to you.',
    'I have found the one whom my soul loves.',
    'Sometimes all you need is a hug from the right person and all your stress will melt away.',
    'In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.',
    'If you remember me, then I don’t care if everyone else forgets.',
    'f you find someone you love in your life, then hang on to that love.',
    'I would rather spend one lifetime with you, than face all the ages of this world alone.',
    'When I see your face, there’s not a thing that I would change, ’cause you’re amazing – just the way you are.',
    'Because of you, I can feel myself slowly, but surely, becoming the me I have always dreamed of being.',
    'We loved with a love that was more than love.',
    'True love is rare, and it’s the only thing that gives life real meaning.',
    'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.',
    'I am my beloved’s and my beloved is mine.',
    'And in her smile I see something more beautiful than the stars.',
    'It was love at first sight, at last sight, at ever and ever sight.',
    'In real love you want the other person’s good. In romantic love you want the other person.',
    'When I saw you I fell in love, and you smiled because you knew.',
    'True love is putting someone else before yourself.',
    'f I had to choose between breathing and loving you I would use my last breath to tell you I love you.',
    'All that you are is all that I’ll ever need.',
    'I love being one half of a romantic couple.',
    'I love you. You… you complete me.',
    'The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.',
    'You don’t marry someone you can live with — you marry someone you cannot live without.',
    'Love is being stupid together.',
    'Romance is the glamour which turns the dust of everyday life into a golden haze.',
    'To be your friend was all I ever wanted; to be your lover was all I ever dreamed.',
    'When I look into your eyes, I know I have found the mirror of my soul.',
    'A boy is holding a girl so very tight in his arms tonight.',
    'You know it’s true. Everything I do, I do it for you.',
    'To me, you are perfect.',
    'I think I’d miss you even if we never met.',
    'Life is not the amount of breaths you take, it’s the moments that take your breath away.',
    'You’re nothing short of my everything.',
    'Love is a friendship set to music.',
    'I love you” begins by I, but it ends up by you.',
    'I fell in love the way you fall asleep: slowly, and then all at once.',
    'Romance is thinking about your significant other, when you are supposed to be thinking about something else.',
    'Your hand touching mine. This is how galaxies collide.',
    'The very first moment I beheld him, my heart was irrevocably gone.',
    'You are the best thing that’s ever been mine.',
    'It’s easy to fall in love. The hard part is finding someone to catch you.',
    'A true love story never ends.',
    'You make me want to be a better man.',
    'I don’t wanna close my eyes, I don’t wanna fall asleep, cuz I’d miss you babe and I don’t wanna miss a thing.',
    'Take love, multiply it by infinity and take it to the depths of forever, and you still have only a glimpse of how I feel for you.',
    'Love is a force more formidable than any other.',
    'Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.',
    'True love stories never have endings.',
    'I love you because the entire universe conspired to help me find you.',
    'I never want to stop making memories with you.',
    'The water shines only by the sun. And it is you who are my sun.',
    'True love is putting someone else before yourself.',
    'f I had to choose between breathing and loving you I would use my last breath to tell you I love you.',
    'All that you are is all that I’ll ever need.',
    'I love being one half of a romantic couple.',
    'I love you. You… you complete me.',
    'The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.',
    'You don’t marry someone you can live with — you marry someone you cannot live without.',
    'Love is being stupid together.',
    'Romance is the glamour which turns the dust of everyday life into a golden haze.',
    'To be your friend was all I ever wanted; to be your lover was all I ever dreamed.',
    'When I look into your eyes, I know I have found the mirror of my soul.',
    'A boy is holding a girl so very tight in his arms tonight.',
    'You know it’s true. Everything I do, I do it for you.',
    'To me, you are perfect.',
    'I think I’d miss you even if we never met.',
    'Life is not the amount of breaths you take, it’s the moments that take your breath away.',
    'You’re nothing short of my everything.',
    'Love is a friendship set to music.',
    'I love you” begins by I, but it ends up by you.',

  ];
  var inputs=[
    'my dad says take care of yourself',
    'my dad says work hard',
    'my mum said eat your vegetables',
    'my mum said be yourself'
  ]
  var inputs1=[
    'my dad',
    'my mum',
    'my son',
    'my dauther',
    'my lover',
    'love',
    'family'
  ]
  const styles = {
    bounce: {
      animation: 'x 1s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }
  const translate=()=>{
    
    const params=new URLSearchParams();
    const params2=new URLSearchParams();
    setClassAnimation(true);
   console.log('1',input);
   console.log('2',from);
   console.log('3',love.length)

   for(var a=0;a<inputs.length;a++){
    if(input.includes(inputs1[a])){
      setOrigin(input);
      setInput(love[Math.floor((Math.random() * 100) + 1)]); 
    }
   }

    params.append('q',input);
    params.append('source',from);
    params.append('target',to);
    params.append('api_key','AIzaSyAPXqqpQrPLeapqSi8ykUPprLrNn12XH3E');
    
    axios.post('https://libretranslate.de/translate',params,{
      headers:{'accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded'},
    }).then(res=>{
      console.log('Anthony',res)
      setOutput(res.data.translatedText)
    })
    params2.append('q',origin);
    params2.append('source',from);
    params2.append('target',to);
    params2.append('api_key','AIzaSyAPXqqpQrPLeapqSi8ykUPprLrNn12XH3E');
    
    axios.post('https://libretranslate.de/translate',params2,{
      headers:{'accept':'application/json',
      'Content-Type':'application/x-www-form-urlencoded'},
    }).then(res=>{
      console.log('Anthony',res)
      setOrigin1(res.data.translatedText)
    })

  };
  useEffect(() => {
    axios.get("https://libretranslate.de/languages",{headers:{'accept':'application/json'}}).then(res=>{
      // console.log(res)
      setOptions(res.data)
    })

  })
  return (
    <div className="App">
    <div class="padding">
      From ({from}):
      <select onChange={e=>setFrom(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      </select>
      
      To ({to}):
       <select onChange={e=>setTo(e.target.value)}>
      {options.map(opt=><option key={opt.code} value={opt.code}>{opt.name}</option>)}
      
      </select>
      </div>
    <div className='card'>
      <b>try:</b>
        
        {inputs.map(inputss=><p>{inputss}</p>)}
    </div>
    
      
      <div className='flex'>
      <StyleRoot>
      <div>
      <textarea style={styles.bounce}   cols='50' rows='8' onInput={(e)=>setInput(e.target.value)} ></textarea>
      </div>
      </StyleRoot>
      <StyleRoot>
      <div>
      <textarea style={styles.bounce}   readonly="yes" cols='50' rows='8' value={output} ></textarea>
      </div>
      </StyleRoot>
      <div>
      </div>
      
      </div>
      <button class='button-53' onClick={e=>translate()}>Translate</button>
        <p>
          original translation: {origin1}
        </p>
      <div>

      </div>

    </div>
  );
}

export default App;
