import ECS from '../ecs.js'
import tap from 'tap'


const w = ECS.createWorld()

tap.same(w, {
    entities: [ ],
    filters: { },
    systems: [ ],
    listeners: {
        added: { },
        removed: { }
    },
    removals: {
        entities: [ ],
        components: [ ]
    }
})
