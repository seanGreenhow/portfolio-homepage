import { TweenMax, Animation } from 'gsap'

const activeTweens: Animation[] = []

export function showMessage(controller, name: string, delay: number = 0) {
    return (e) => {
        if (e.type == "enter" && controller.info("scrollDirection") == "FORWARD") {
            TweenMax.set(name, {
                height: "auto"
            }).delay(delay)

            activeTweens.push(TweenMax.from(name, 0.5, {
                height: 0
            }).delay(delay))

            activeTweens.push(TweenMax.to(name, 0.5, {
                opacity: 1
            }).delay(delay + 0.5))
        }
    }
}

export function clearMessages(controller) {
    return (e) => {
        if (e.type == "leave" && controller.info("scrollDirection") == "REVERSE") {
            // remove all active tweens
            while (activeTweens.length) {
                let tween = activeTweens.pop()
                tween.kill()
            }
            TweenMax.to('.message', 0.5, {
                height: 0,
                opacity: 0
            })
        }
    }
}