package com.panopset.cors

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.context.request.RequestContextHolder

@RestController
@RequestMapping(path = ["/ctl"])
class HelloWorldController {

    @GetMapping("helloApi")
    fun helloWorld(): HiThere {
        val sessionId = RequestContextHolder.currentRequestAttributes().sessionId
        return HiThere(sessionId)
    }
}

data class HiThere(
    var id: String = ""
)
