function Countdown(numberOfHours, numberOfMinutes, numberOfSeconds)
{
    
    this.secondsRemaining   = (numberOfHours * 3600) + (numberOfMinutes * 60) + numberOfSeconds;
    
    //DISPLAY VARIABLES;
    this.hours              = numberOfHours;
    this.minutes            = numberOfMinutes;
    this.seconds            = numberOfSeconds;
    
    this.secondsRemaining   = 0;
    
    return this;
    
}

//MANAGE THE TIME REMANING AND SET DISPLAY VALUES;
Countdown.prototype.count = function()
{

    var secondsRemaining = this.getSecondsRemaining();
    
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    
    this.setHours(parseInt(secondsRemaining / 3600));
    secondsRemaining = secondsRemaining % 3600;
     
    this.setMinutes(parseInt(secondsRemaining / 60));
    this.setSeconds(parseInt(secondsRemaining % 60));

    this.setSecondsRemaining(this.getSecondsRemaining()-1);
    
    
}
   


//GETTERS AND SETTERS;
Countdown.prototype.getSecondsRemaining = function()
{
    return this.secondsRemaining;
}

Countdown.prototype.setSecondsRemaining = function(secondsRemaining)
{
    this.secondsRemaining = secondsRemaining;
}

Countdown.prototype.getHours = function()
{
    if(this.hours < 10)
    {
        return "0" + this.hours;
    }
    else
    {
        return this.hours;
    }
}

Countdown.prototype.setHours = function(hours)
{
    this.hours = hours;
}

Countdown.prototype.getMinutes = function()
{
    if(this.minutes < 10)
    {
        return "0" + this.minutes;
    }
    else
    {
        return this.minutes;
    }
}

Countdown.prototype.setMinutes = function(minutes)
{
    this.minutes = minutes;
}


Countdown.prototype.getSeconds = function()
{
    if(this.seconds < 10)
    {
        return "0" + this.seconds;
    }
    else
    {
        return this.seconds;
    }
}

Countdown.prototype.setSeconds = function(seconds)
{
    this.seconds = seconds;
}

    
    






    
    
    
    