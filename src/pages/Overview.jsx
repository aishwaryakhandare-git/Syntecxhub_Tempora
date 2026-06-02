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


<div className="weather">

<h1>
28°
</h1>

<p>
Partly Cloudy
</p>

<p>
Mumbai
</p>

</div>


<div className="story">

<h2>
Today's Weather Story
</h2>

<p>

Warm morning.

Humidity may rise later.

Good weather for short walks.

</p>

</div>

</div>

)

}

export default Overview