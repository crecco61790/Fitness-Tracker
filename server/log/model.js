var axios = require("axios");

function Log() {
    this.Users = [];

    this.Entries = [];
    this.sharedEntries = [];

    // remember. This is our login function. It s the function that gets called when a user sends joins for the first time.
    this.GetQuotes = (playerId) => {

        if(this.Players.some(x=> x.PlayerId == playerId)){
            
        }else{
            this.Players.push({ PlayerId: playerId, Name: playerId, Score: 0 });
        }
            return QuotesStack.slice(iCurrentQuote, iCurrentQuote += 7);   
    }
    
    this.FlipPicture = () => {
        this.Picture = PicturesStack[iCurrentPicture = (iCurrentPicture+1) % PicturesStack.length ];
        this.PlayedQuotes = [];
    } 

    this.SubmitQuote = (text, playerId) => {
        if(playerId == this.DealerId) throw Error("Dealer can't submit a quote");
        this.PlayedQuotes.push({ Text: text, PlayerId: playerId });
    } 
    this.ChooseQuote = text => {
        const chosenQuote = this.PlayedQuotes.find(x=> x.Text == text)
        chosenQuote.Chosen = true;
        this.Players.find(x=> x.PlayerId == chosenQuote.PlayerId).Score++;
        this.DealerId = this.Players[this.Players.findIndex(x=> x.PlayerId == this.DealerId)  + 1 % this.Players.length ].PlayerId; 
    } 

}

module.exports = Log;