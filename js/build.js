$(document).ready(function () {
    $(".carousel").carousel();
    $(".cross").hide();

    $(".hamburger-menu").click(function () {
        console.log('menu display: show');
        $(".hero-nav-small").slideToggle("slow", function () {
            $(".hamburger-menu").hide();
            $(".cross").show();
        });
    });
    $(".cross").click(function () {
        console.log('menu display: none');
        $(".hero-nav-small").slideToggle("slow", function () {
            $(".cross").hide();
            $(".hamburger-menu").show();
        });
    });
    $(".contact-me").click(function () {
        $("#myModal").fadeToggle('fast');
    });
    $(".width-icon").click(function () {
        $("#myModal").fadeToggle('fast');
    });
});

/**
 * Created by Tetiana on 17.11.2016.
 */

console.log('start module1 logic');
/**
 * Created by Tetiana on 17.11.2016.
 */
console.log('start module2 logic');
/**
 * Created by Tetiana on 17.11.2016.
 */
console.log('start module3121212 logic');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiLCJtb2R1bGUxLmpzIiwibW9kdWxlMi5qcyIsIm1vZHVsZTMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoXCIuY2Fyb3VzZWxcIikuY2Fyb3VzZWwoKTtcclxuICAgICQoXCIuY3Jvc3NcIikuaGlkZSgpO1xyXG5cclxuICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZW51IGRpc3BsYXk6IHNob3cnKTtcclxuICAgICAgICAkKFwiLmhlcm8tbmF2LXNtYWxsXCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiLmNyb3NzXCIpLnNob3coKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgJChcIi5jcm9zc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ21lbnUgZGlzcGxheTogbm9uZScpO1xyXG4gICAgICAgICQoXCIuaGVyby1uYXYtc21hbGxcIikuc2xpZGVUb2dnbGUoXCJzbG93XCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJChcIi5jcm9zc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoXCIuaGFtYnVyZ2VyLW1lbnVcIikuc2hvdygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICAkKFwiLmNvbnRhY3QtbWVcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICQoXCIjbXlNb2RhbFwiKS5mYWRlVG9nZ2xlKCdmYXN0Jyk7XHJcbiAgICB9KTtcclxuICAgICQoXCIud2lkdGgtaWNvblwiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJChcIiNteU1vZGFsXCIpLmZhZGVUb2dnbGUoJ2Zhc3QnKTtcclxuICAgIH0pO1xyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGV0aWFuYSBvbiAxNy4xMS4yMDE2LlxyXG4gKi9cclxuXHJcbmNvbnNvbGUubG9nKCdzdGFydCBtb2R1bGUxIGxvZ2ljJyk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgVGV0aWFuYSBvbiAxNy4xMS4yMDE2LlxyXG4gKi9cclxuY29uc29sZS5sb2coJ3N0YXJ0IG1vZHVsZTIgbG9naWMnKTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBUZXRpYW5hIG9uIDE3LjExLjIwMTYuXHJcbiAqL1xyXG5jb25zb2xlLmxvZygnc3RhcnQgbW9kdWxlMzEyMTIxMiBsb2dpYycpOyJdfQ==
