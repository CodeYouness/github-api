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
    <div class="col-lg-3 col-md-4 my-3">
        <div class="profile-card-4 text-center">
            <img :src="card.owner.avatar_url" class="img-fluid">
            <div class="profile-content">
                <div class="profile-name">
                    <!-- <p>Owner: {{ card.owner.login }}</p> -->
                </div>
                <a :href="card.git_url" rel="noopener noreferrer" target="_blank" class="profile-description">Go to {{
                    card.name }} repo</a>
                <div class="row">
                    <div class="col-6">
                        <div class="profile-overview">
                            <p>&starf;</p>
                            <h4>{{ card.watchers }}</h4>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="profile-overview">
                            <p>&#10071;</p>
                            <h4>{{ card.open_issues }}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.profile-card-4 {
    background-color: #FFF;
    border-radius: 5px;
    box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    position: relative;
    margin: 10px auto;
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
    text-shadow: -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000;
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