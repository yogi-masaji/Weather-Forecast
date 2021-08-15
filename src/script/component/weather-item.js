class ClubItem extends HTMLElement {

    

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set club(club) {
        this._club = club;
        this.render();
    }
    
    



    
    render() {
        this.shadowDOM.innerHTML = `
           <style>
              * {
                   margin: 0;
                   padding: 0;
                   box-sizing: border-box;
               }
               :host {
                   display: flex;
                   margin-bottom: 18px;
                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                   border-radius: 10px;
                   overflow: hidden;
                   background-color: #fff;
                   margin-top:20px;
               }
              
               .fan-art-club{
                   height: 20%;
                   object-position: center;
                   align-items: center;
               }
              
               .club-info {
                   padding: 24px;
               }
              
               .club-info > h2 {
                   font-weight: lighter;
               }
              
               .club-info > p {
                   margin-top: 10px;
                   overflow: hidden;
                   text-overflow: ellipsis;
                   display: -webkit-box;
                   -webkit-box-orient: vertical;
                   -webkit-line-clamp: 16; /* number of lines to show */
               }

               @media screen and (max-width: 550px){
                club-list {
                    display: block;
                    margin-top: 32px;
                    width: 100%;
                    padding: 16px;
                }

                .fan-art-club{
                    height: 50%;
                    object-position: center;
                    align-items: center;
                }
               }

           </style>
           <img class="fan-art-club" src="https://www.weatherbit.io/static/img/icons/${this._club.weather.icon}.png" alt="Fan Art">
           <div class="club-info">
            <h2>${this._club.city_name}</h2>
               <h1>${this._club.temp} °C</h1>
               <h2>${this._club.weather.description}</h2>
               <P>Feels like ${this._club.app_temp}°C</P>
               <P>Humidity ${this._club.rh}%</P>
           </div>`;
    }
}

customElements.define("club-item", ClubItem);