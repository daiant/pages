import React, { useEffect } from "react";

export function Game({ dot, dotOutline }: any) {
    let enemyCount = 0;
    const perSeconds = 1000;
    const MAX_ENEMY_COUNT = 1;
    const DELAY_UFO = 15 * perSeconds;


    let x = 0;
    let y = 0;

    const randomPos = (enemy: any) => {
        let random_top = Math.floor(Math.random() * window.innerHeight);
        let random_left = Math.floor(Math.random() * window.innerWidth)
        enemy.style.top = random_top + "px";
        enemy.style.left = random_left + "px";



        let a = random_top - y;
        let b = random_left - x;
        let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

        let rot = Math.asin(Math.sin(a / c)) * 180 / Math.PI;
        enemy.style.transform = `rotate(${rot}deg)`
        setInterval(() => {
            if (enemy.classList.contains("ded")) {
                return;
            }
            let top = parseInt(enemy.style.top.replace("px", ""));
            let left = parseInt(enemy.style.left.replace("px", ""));

            let a = top - y;
            let b = left - x;
            let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

            let rot = Math.asin(Math.sin(a / c)) * 180 / Math.PI;
            enemy.style.transform = `rotate(${rot}deg)`

            if (a < 0) top += 1;
            else if (a > 0) top -= 1;

            if (b < 0) left += 1;
            else if (b > 0) left -= 1;

            enemy.style.top = top % window.innerHeight + "px";
            enemy.style.left = left % window.innerWidth + "px";

        }, 32)
    }
    function killEnemy(this: HTMLElement) {

        this.classList.add("ded");

        this.addEventListener("animationend", () => { this.remove(); enemyCount -= 1; createEnemy() });
    }
    function createEnemy() {
        setTimeout(() => {
            if (enemyCount < MAX_ENEMY_COUNT) {
                let enemy = document.createElement("div");
                enemy.classList.add("enemy");
                randomPos(enemy)
                enemy.addEventListener("click", killEnemy);
                document.body.append(enemy);
                enemyCount += 1;
            }
        }, DELAY_UFO)

    }
    useEffect(() => {
        document.addEventListener("mousemove", (e) => {
            x = e.clientX;
            y = e.clientY;
        })
        // createEnemy();
    }, [])
    return (
        <>
            <div ref={dot} className="cursor-dot"></div>
            <div ref={dotOutline} className="cursor-dot-outline"></div>
            <div className="ripple"></div>
            <div id="play_field">

            </div>
        </>
    )
}
