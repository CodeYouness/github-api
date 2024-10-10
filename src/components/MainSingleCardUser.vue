<script>
export default {
    data() {
        return {
        }
    },
    props: {
        card: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <!-- inizio card  -->
    <div class="col-3 my-3">
        <div class="profile-card-4 text-center"><img :src="card.avatar_url" class="img img-responsive">
            <div class="profile-content">
                <div class="profile-name">
                    <p>{{ card.login }}</p>
                </div>
                <a :href="card.html_url" rel="noopener noreferrer" target="_blank" class="profile-description">Go to {{
                    card.login }} page</a>
                <div class="row">
                    <div class="col-4">
                        <div class="profile-overview">
                            <p>TWEETS</p>
                            <h4>1300</h4>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="profile-overview">
                            <p>FOLLOWERS</p>
                            <h4>250</h4>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="profile-overview">
                            <p>FOLLOWING</p>
                            <h4>168</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.col-5th {
    flex: 0 0 20%;
    max-width: 20%;
}

.profile-card-4 {
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    margin: 10px auto;
    cursor: pointer;
}

.profile-card-4 img {
    transition: all 0.25s linear;
}

.profile-card-4 .profile-content {
    position: relative;
    padding: 15px;
    background-color: #FFF;
}

.profile-card-4 .profile-name {
    font-weight: bold;
    position: absolute;
    left: 0px;
    right: 0px;
    top: -70px;
    color: #FFF;
    font-size: 17px;
}

.profile-card-4 .profile-name p {
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 1.5px;
}

.profile-card-4 .profile-description {
    color: #777;
    font-size: 12px;
    padding: 10px;
}

.profile-card-4 .profile-overview {
    padding: 15px 0px;
}

.profile-card-4 .profile-overview p {
    font-size: 10px;
    font-weight: 600;
    color: #777;
}

.profile-card-4 .profile-overview h4 {
    color: #273751;
    font-weight: bold;
}

.profile-card-4 .profile-content::before {
    content: "";
    position: absolute;
    height: 20px;
    top: -10px;
    left: 0px;
    right: 0px;
    background-color: #FFF;
    z-index: 0;
    transform: skewY(3deg);
}

.profile-card-4:hover img {
    transform: rotate(5deg) scale(1.1, 1.1);
    filter: brightness(110%);
}
</style>