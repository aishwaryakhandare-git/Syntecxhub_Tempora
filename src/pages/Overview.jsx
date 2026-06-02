import "../styles/overview.css"

function Overview(){

return(

<div className="overview">

<div className="hero">

<p className="logo">
TEMPORA
</p>

<input
className="search"
placeholder="Search a city"
/>

</div>

<div className="top">

<div className="weather">

<p className="label">
Current Weather
</p>

<h1>
28°
</h1>

<p className="condition">
Partly Cloudy
</p>

<p className="city">
Mumbai
</p>

</div>

<div className="story">

<h2>
Today's Weather Story
</h2>

<p>

Warm morning with soft clouds.

Humidity may rise later.

Comfortable weather for outdoor activities.

</p>

</div>

</div>

<div className="timeline">

<div>

<p className="time">
Now
</p>

<p>
28°
</p>

</div>

<div>

<p className="time">
11 AM
</p>

<p>
30°
</p>

</div>

<div>

<p className="time">
2 PM
</p>

<p>
32°
</p>

</div>

<div>

<p className="time">
5 PM
</p>

<p>
28°
</p>

</div>

<div>

<p className="time">
8 PM
</p>

<p>
26°
</p>

</div>

</div>

</div>

)

}

export default Overview
