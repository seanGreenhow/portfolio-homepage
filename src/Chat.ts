import { TweenMax } from 'gsap'

export function showMessage(controller, name: string, delay: number = 0) {
    return (e) => {
        if (e.type == "enter" && controller.info("scrollDirection") == "FORWARD") {
            TweenMax.set(name, {
                height: "auto"
            }).delay(delay)

            TweenMax.from(name, 0.5, {
                height: 0
            }).delay(delay)

            TweenMax.to(name, 0.5, {
                opacity: 1
            }).delay(delay + 0.5)
        }
    }
}

export function clearMessages(controller) {
    return (e) => {
        if (e.type == "leave" && controller.info("scrollDirection") == "REVERSE") {
            TweenMax.to('.message', 0.5, {
                height: 0,
                opacity: 0
            })
        }
    }
}