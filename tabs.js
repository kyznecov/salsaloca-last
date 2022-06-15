let tab = function () {
    // let tabNav = document.querySelectorAll('.directions__tab_button'),
    let tabNav = document.querySelectorAll('.tab-button'),
        // tabContent = document.querySelectorAll('.direction__level'),
        tabContent = document.querySelectorAll('.tab-content'),
        tabName;

        tabNav.forEach(item => {
            item.addEventListener('click', selectTabNav)
        });

        function selectTabNav() {
            tabNav.forEach(item => {
                item.classList.remove('is-active');
            });
            this.classList.add('is-active');
            tabName = this.getAttribute('data-tab-name');
            selectTabContent(tabName);
        }

        function selectTabContent(tabName) {
            tabContent.forEach(item => {
                item.classList.contains(tabName) ? item.classList.add('is-active') :
                item.classList.remove('is-active');
            })
        }
};


tab();