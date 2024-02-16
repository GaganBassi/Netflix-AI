export const logo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

//Set the options of TMDB to call the API by passing this which has API KEY 
export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:process.env.REACT_APP_AUTHORIZATION
    }
  };

  //Writing the image URL of TMDB 

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const IMG_Login_Back="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/f5106312-05b7-4d50-8160-9f28090c28c0/CA-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const OPEN_AI_KEY=process.env.REACT_APP_OPENAI_KEY;

