var videosAttributes = [
    {
        "caption": "A corgi playing with a ball.",
        "mesh_src": "a_corgi_playing_with_a_ball_drc",
        "src": "assets/text_to_4D/a_corgi_playing_with_a_ball.mp4"
    },
    {
        "caption": "A panda dancing.",
        "mesh_src": "a_panda_dancing_drc",
        "src": "assets/text_to_4D/a_panda_dancing.mp4",
        "nframes": "42",
    },
    {
        "caption": "A space shuttle launching.",
        "mesh_src": "a_space_shuttle_launching_drc",
        "src": "assets/text_to_4D/a_space_shuttle_launching.mp4"
    },
    {
        "caption": "Clown fish swimming through the coral reef.",
        "mesh_src": "Clown_fish_swimming_through_the_coral_reef_drc",
        "src": "assets/text_to_4D/Clown_fish_swimming_through_the_coral_reef.mp4",
        "nframes": "58"
    },
    {
        "caption": "An emoji of a baby panda reading a book.",
        "mesh_src": "An_emoji_of_a_baby_panda_reading_a_book_drc",
        "src": "assets/text_to_4D/An_emoji_of_a_baby_panda_reading_a_book.mp4"
    },
    {
        "caption": "A dog riding a skateboard.",
        "mesh_src": "Dog_riding_a_skateboard_drc",
        "src": "assets/text_to_4D/Dog_riding_a_skateboard.mp4"
    },
    {
        "caption": "3D rendering of a fox playing videogame.",
        "mesh_src": "3D_rendering_of_a_fox_playing_videogame_180000_drc",
        "src": "assets/text_to_4D/3D_rendering_of_a_fox_playing_videogame.mp4",
        "nframes": "62"
    },
    {
        "caption": "A squirrel riding a motorcycle.",
        "mesh_src": "a_squirrel_riding_a_motorcycle_drc",
        "src": "assets/text_to_4D/a_squirrel_riding_a_motorcycle.mp4"
    },
    {
        "caption": "A crocodile playing a drum set.",
        "mesh_src": "a_crocodile_playing_a_drum_set_scc_drc",
        "src": "assets/text_to_4D/a_crocodile_playing_a_drum_set_depth_rgb.mp4",
        "nframes": "62"
    },
    {
        "caption": "A panda playing on a swing set.",
        "mesh_src": "A_panda_playing_on_a_swing_set_170000_128_drc",
        "src": "assets/text_to_4D/A_panda_playing_on_a_swing_set.mp4"
    },
    {
        "caption": "A goat drinking beer.",
        "mesh_src": "a_goat_drinking_beer_scc_drc",
        "src": "assets/text_to_4D/a_goat_drinking_beer.mp4"
    },
    {
        "caption": "A dog wearing a Superhero outfit with red cape fl",
        "mesh_src": "A_dog_wearing_a_Superhero_outfit_with_red_cape_flying_through_the_sky_drc",
        "src": "assets/text_to_4D/A_dog_wearing_a_Superhero_outfit_with_red_cape_flying_through_the_sky.mp4"
    },
    {
        "caption": "A silver humanoid robot flipping a coin.",
        "mesh_src": "a_silver_humanoid_robot_flipping_a_coin_drc",
        "src": "assets/text_to_4D/a_silver_humanoid_robot_flipping_a_coin.mp4"
    },
    {
        "caption": "An octopus is underwater.",
        "mesh_src": "an_octopus_is_underwater_drc",
        "src": "assets/text_to_4D/an_octopus_is_underwater.mp4"
    },
    {
        "caption": "A squirrel playing on a swing set.",
        "mesh_src": "A_squirrel_playing_on_a_swing_set_170000_dnerf_drc",
        "src": "assets/text_to_4D/A_squirrel_playing_on_a_swing_set.mp4"
    },
    {
        "caption": "An alien playing the piano.",
        "mesh_src": "alien_piano_annealing_lr1e3_skip_t_drc",
        "src": "assets/text_to_4D/an_alien_playing_the_piano.mp4"
    },
    {
        "caption": "A squirrel playing the saxophone.",
        "src": "assets/text_to_4D/a_squirrel_playing_the_saxophone.mp4"
    },
    {
        "caption": "A humanoid robot playing the violin.",
        "src": "assets/text_to_4D/a_humanoid_robot_playing_the_violin.mp4"
    },
    {
        "caption": "A kangaroo cooking a meal.",
        "src": "assets/text_to_4D/A_kangaroo_cooking_a_meal.mp4"
    },
    {
        "caption": "A baby panda eating ice cream.",
        "src": "assets/text_to_4D/baby_panda_eating_ice_cream.mp4"
    },
    {
        "caption": "A yorkie dog eating a donut.",
        "src": "assets/text_to_4D/a_yorkie_dog_eating_a_donut.mp4"
    },
    {
        "caption": "A human skeleton drinking wine.",
        "src": "assets/text_to_4D/a_human_skeleton_drinking_a_glass_of_red_wine.mp4"
    },
    {
        "caption": "Chihuahua running on the grass.",
        "src": "assets/text_to_4D/Chihuahua_running_on_the_grass.mp4"
    },
    {
        "caption": "A bear driving a car.",
        "src": "assets/text_to_4D/A_bear_driving_a_car.mp4"
    },
    {
        "caption": "A cat singing.",
        "src": "assets/text_to_4D/a_cat_singing.mp4"
    },
    {
        "caption": "A squirrel Djing.",
        "src": "assets/text_to_4D/a_squirrel_DJing.mp4"
    },
    {
        "caption": "Shark swimming in the desert.",
        "src": "assets/text_to_4D/Shark_swimming_in_desert.mp4"
    },
    {
        "caption": "A monkey eating a candy bar.",
        "src": "assets/text_to_4D/a_monkey_eating_a_candy_bar.mp4"
    }];

function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild;
}

function add_videos(num_videos = 4) {
    let thumbnails = document.getElementById("textToVideos");
    let start = window.start;
//   videoPaths = videoPaths.slice(0, 3);
    for (let i = start; i < start + num_videos && i < videosAttributes.length; i++) {
        let outer = document.createElement("DIV");
        outer.classList = "w3-col l3 m6 vidContainer";
        let videoAttributes = videosAttributes[i];
        const caption = createElementFromHTML(`<p valign="middle" halign="middle" align="center">${videoAttributes.caption}</p>`);
        outer.appendChild(caption);

        const video = createElementFromHTML(`<video class="video" id="video${i}" loop autoplay muted playsinline
           src="${videoAttributes.src}" onPlay="resizeAndPlay(this)"></video>`);
        video.onplay = () => {
            resizeAndPlay(video);
        };
        outer.appendChild(video);

        let componentCanvas = document.createElement("CANVAS")
        componentCanvas.height = "0";
        componentCanvas.classList = "videoMerge";
        componentCanvas.id = "video" + i + "Merge";
        outer.appendChild(componentCanvas);

        if (videoAttributes.mesh_src) {
            let iframe = createElementFromHTML(`<iframe src="" class="meshViewer" frameBorder="0"></iframe>`);
            let iframe_button = createElementFromHTML(`<a href="#" class="w3-button w3-light-grey w3-block viewerToggle" data-sequence="${videoAttributes.mesh_src}" ></a>`);
            if (videoAttributes.nframes) {
                iframe_button.dataset.nframes = videoAttributes.nframes;
            }
            add_button_logic(iframe_button);
            outer.appendChild(iframe);
            outer.appendChild(iframe_button)
        } else {
            let dummy = createElementFromHTML(`<div class="emptydiv"></div>`);
            outer.appendChild(dummy);
        }

        thumbnails.appendChild(outer);
        window.start = window.start + 1;
    }
    if (window.start >= videosAttributes.length) {
        const load_more_button = document.getElementById("load_more");
        load_more_button.remove();
    }

}

function disableMeshViewer(iframe, canvas, a, textLabelMesh) {
    iframe.src = '';
    iframe.style.display = 'none';
    canvas.style.display = 'block';
    a.textContent = textLabelMesh;
}

function add_button_logic(element) {
    const textLabelMesh = 'Load mesh';
    const textLabelVideo = 'Show video';
    element.textContent = textLabelMesh;
    element.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target;
        const parent = target.parentElement;
        const iframe = parent.querySelector('.meshViewer');
        const canvas = parent.querySelector('.videoMerge');
        if (element.textContent === textLabelMesh) {
            if (window.activeElements != null) {
                disableMeshViewer(window.activeElements.iframe, window.activeElements.canvas, window.activeElements.a, textLabelMesh);
            }

            const sequence = target.dataset.sequence;
            const nframes = target.dataset.nframes;
            iframe.src = './render_draco.html?sequence=' + sequence;
            if (nframes) {
                iframe.src += '&nframes=' + nframes;
            }
            iframe.style.display = 'block';
            window.activeElements = {
                iframe: iframe,
                canvas: canvas,
                a: target,
            };
            canvas.style.display = 'none';
            target.textContent = textLabelVideo;
            const placeholder = parent.getElementsByClassName('animated-background');
            if (placeholder.length > 0) {
                placeholder[0].style.display = 'none';
            }
        } else if (element.textContent === textLabelVideo) {
            disableMeshViewer(iframe, canvas, target, textLabelMesh);
            window.activeElements = null;
        }
    });

    return false;
}

window.start = 0;
window.activeElements = null;
add_videos(num_videos = 8)