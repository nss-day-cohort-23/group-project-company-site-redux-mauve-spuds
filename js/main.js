const footer = document.getElementById("footer"),
      header = document.getElementById("header");

header.innerHTML = `
<div id="site-title">
    <h3>Spud Haven: Your Potato Supercenter</h3>
</div>
<nav>
    <ul class="navbar">
        <li>
            <a href="index.html">Home</a>
        </li>
        <li>
            <a href="products.html">Our Spuds</a>
        </li>
        <li>
            <a href="spud-facts.html">Spud Facts</a>
        </li>
        <li>
            <a href="about.html">Our Spud Studs</a>
        </li>
    </ul>
</nav>`;

footer.innerHTML = `
<p>Spud Haven &copy; 2017</p>
<div id="social-media">
    <a target="_blank" href="https://www.facebook.com">
        <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/online_social_media_facebook-128.png"
            alt="facebook logo">
    </a>
    <a target="_blank" href="https://www.instagram.com">
        <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/instagram_online_social_media_photo-128.png"
            alt="instagram logo">
    </a>
    <a target="_blank" href="https://www.twitter.com">
        <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/twitter_online_social_media-128.png"
            alt="twitter logo">
    </a>
    <a target="_blank" href="https://www.youtube.com">
        <img src="https://cdn2.iconfinder.com/data/icons/black-white-social-media/32/youtube_online_social_media_tube-128.png"
            alt="youtube logo">
    </a>
</div>`;
