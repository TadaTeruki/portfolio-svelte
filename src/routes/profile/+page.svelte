<script>
    import Footer from "$lib/components/footer.svelte";
    import Header from "$lib/components/header.svelte";
</script>

<Header backMotif="fun">
    <h1>Profile</h1>
</Header>

<main>
    <h2>Name</h2>

    <div class="content">Teruki TADA / 多田 瑛貴 / ただ てるき</div>

    <h2>Affiliation</h2>

    <div class="content">
        School of Complex Intelligent Systems, Future University Hakodate
    </div>

    <h2>Educations</h2>

    <div class="content">
        <ul>
            <li>
                School of Complex Intelligent Systems, Future University
                Hakodate<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Apr. 2022 - Present</span><br />
            </li>
            <li>
                Kyoto Prefectural Seimei High School<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Apr. 2018 - Mar. 2022</span><br />
            </li>
        </ul>
    </div>

    <h2>Interests</h2>

    <div class="content">
        <ul>
            <li>
                Geospatial Information
            </li>
            <li>
                GUI
                <span class="text-gray-500 dark:text-gray-200 text-sm">Desktop Applications / Web Frontend</span>
            </li>
            <li>
                Software Architecture
            </li>
            <li>
                Computer Graphics
            </li>
            <li>
                Machine Learning
            </li>
            <li>
                FOSS Culture
            </li>
        </ul>
    </div>

    <h2>Work Experiences</h2>
    <div class="content">
        <ul>
            <li>
                Eukarya Inc. as a freelance developer<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Jan. 2025 - Present</span><br />
            </li>
            <li>
                MIERUNE Inc. as a freelance developer<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Feb. 2024 - Jan. 2025</span><br />
            </li>
            <li>
                Internship at MIERUNE Inc.<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Sep. 2023</span>
            </li>
            <li>
                Online Spring Internship for Gophers 2022 at Mercari, Inc.<br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Mar. 2022</span><br />
            </li>
        </ul>
    </div>

    <h2>Other Experiences</h2>
    <div class="content">
        <ul>
            <li>
                <a
                    href="https://shinsetsu.hokkaido.jp/local"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">Shinsetsu/新雪プログラム</a
                ><br />
                「ゲーム・映像表現の可能性を広げる 地形生成ライブラリの開発」<br
                />
                (Landscape generation library for visual expression)<br />
                <a
                    href="https://slides.peruki.dev/slides/2024/%E6%96%B0%E9%9B%AA%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%A0/0113/"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">Slide</a
                >
                <br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Sep. 2023 - Feb. 2024</span>
            </li>
            <br />
            <li>
                <a
                    href="https://labs.cybozu.co.jp/youth.html"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover"
                    >Cybozu Labs Youth/サイボウズ・ラボユース</a
                ><br />
                「Rust製Linuxウインドウマネージャ開発を通じた良い設計へのアプローチ」<br
                />
                (Approach to better software architecture through window manager
                development for Linux)<br />
                <a
                    href="https://slides.peruki.dev/slides/2024/%E3%83%A9%E3%83%9C%E3%83%A6%E3%83%BC%E3%82%B9/%E6%88%90%E6%9E%9C%E7%99%BA%E8%A1%A8%E4%BC%9A"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">Slide</a
                >
                |
                <a
                    href="https://github.com/TadaTeruki/clear_wm"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">Source Code</a
                ><br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Jun. 2023 - Jun. 2024</span>
            </li>
            <br />
            <li>
                <a
                    href="https://flicker-quesadilla-913.notion.site/Mariners-Conference-6eb52dcd8cf142db9e6f184ad5f04f69D"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">Mariners' Conference</a
                >
                - Founder and the First Leader<br />
                Tech Circle in Future University Hakodate<br />
                <a
                    href="https://mariconf.connpass.com/"
                    target="_blank"
                    class="text-linkColor hover:text-linkColorHover dark:text-linkColorDark dark:hover:text-linkColorDarkHover">connpass</a
                ><br />
                <span class="text-gray-500 dark:text-gray-200 text-sm">Feb. 2022 - Jul. 2024</span>
            </li>
        </ul>
    </div>
</main>

<Footer />
