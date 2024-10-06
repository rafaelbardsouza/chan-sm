<template>
    <div class="home">
        <Navbar />
        <div class="new-post">
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Cmon, share something cool!"></textarea>
            <div class="buttons">
                <select class="btn secondary">
                    <option hidden value="">Select a board</option>
                    <option value="public">Public</option>
                    <option value="private">Private</option>
                </select>
                <button class="btn primary">Post</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from '../src/components/Navbar.vue'

    export default {
        components: {
            Navbar
        }
    }
</script>

<style>
    .home {
        display: flex;
        flex-direction: row;

        .new-post {
            display: flex;
            flex-direction: column;
            width: 100%;
            box-sizing: border-box;

            .buttons {
                display: flex;
                flex-direction: row;
                width: 100%;
                justify-content: space-between;
            }
        }
    }
</style>