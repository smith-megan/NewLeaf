import a from "../../assets/showroomphoto/a.jpg"

import b from "../../assets/showroomphoto/b.jpg"
import b1 from "../../assets/showroomphoto/b-1.jpg"
import b2 from "../../assets/showroomphoto/b-2.jpg"

import c from "../../assets/showroomphoto/c.jpg"
import c1 from "../../assets/showroomphoto/c-1.jpg"

import d from "../../assets/showroomphoto/d.jpg"
import d1 from "../../assets/showroomphoto/d-1.jpg"
import d2 from "../../assets/showroomphoto/d-2.jpg"
import d3 from "../../assets/showroomphoto/d-3.jpg"
import d4 from "../../assets/showroomphoto/d-4.jpg"

import e from "../../assets/showroomphoto/e.jpg"
import e1 from "../../assets/showroomphoto/e-1.jpg"
import e2 from "../../assets/showroomphoto/e-2.jpg"
import e3 from "../../assets/showroomphoto/e-3.jpg"
import e4 from "../../assets/showroomphoto/e-4.jpg"

import f from "../../assets/showroomphoto/f.jpg"

import g from "../../assets/showroomphoto/g.jpg"
import g1 from "../../assets/showroomphoto/g-1.jpg"
import g2 from "../../assets/showroomphoto/g-2.jpg"
import g3 from "../../assets/showroomphoto/g-3.jpg"
import g4 from "../../assets/showroomphoto/g-4.jpg"

import h from "../../assets/showroomphoto/h.jpg"
import h1 from "../../assets/showroomphoto/h-1.jpg"

import i from "../../assets/showroomphoto/i.jpg"
import i1 from "../../assets/showroomphoto/i-1.jpg"
import i2 from "../../assets/showroomphoto/i-2.jpg"

import j from "../../assets/showroomphoto/j.jpg"
import j1 from "../../assets/showroomphoto/j-1.jpg"
import j2 from "../../assets/showroomphoto/j-2.jpg"

import k from "../../assets/showroomphoto/k.jpg"

import l from "../../assets/showroomphoto/l.jpg"
import l1 from "../../assets/showroomphoto/l-1.jpg"
import l2 from "../../assets/showroomphoto/l-2.jpg"

import m from "../../assets/showroomphoto/m.jpg"
import m1 from "../../assets/showroomphoto/m-1.jpg"
import m2 from "../../assets/showroomphoto/m-2.jpg"

import n from "../../assets/showroomphoto/n.jpg"
import n1 from "../../assets/showroomphoto/n-1.jpg"
import n2 from "../../assets/showroomphoto/n-2.jpg"

import o from "../../assets/showroomphoto/o.jpg"
import o1 from "../../assets/showroomphoto/o-1.jpg"

import p from "../../assets/showroomphoto/p.jpg"
import p1 from "../../assets/showroomphoto/p-1.jpg"
import p2 from "../../assets/showroomphoto/p-2.jpg"
import p3 from "../../assets/showroomphoto/p-3.jpg"

import q from "../../assets/showroomphoto/q.jpg"

import r from "../../assets/showroomphoto/r.jpg"
import r1 from "../../assets/showroomphoto/r-1.jpg"
import r2 from "../../assets/showroomphoto/r-2.jpg"

export interface PieceInterface {
  images: Array<string>
  header: string
  blurb: string
}

const Gallerylist: Array<PieceInterface> = [
  {
    images: [a],
    header: "Blue and Cream Tall Dresser",
    blurb: "The first dresser I ever painted.",
  },
  {
    images: [b, b1, b2],
    header: "Small Wildflower Nightstand",
    blurb: "Experimenting with color combinations and a freehand design",
  },
  {
    images: [c, c1],
    header: "The Long White Dresser",
    blurb: "Cream and wood grain together",
  },
  {
    images: [d, d1, d2, d3, d4],
    header: "Mahogany Coffee Tables",
    blurb: "Challenging pair of Mahogany coffee tables",
  },
  {
    images: [e, e1, e2, e3, e4],
    header: "Blue and Rose Record table",
    blurb: "A beautiful piece and first test of custom stencil",
  },
  {
    images: [f],
    header: "Jasmine table",
    blurb: "A round table with Jasmine flower stencil experiment",
  },
  {
    images: [g, g1, g2, g3, g4],
    header: "The Heirloom Vanity",
    blurb: "The most challenging and rewarding restoration I've ever done",
  },
  {
    images: [h, h1],
    header: "Simple Round Green Table",
    blurb: "Sometimes simple is what is needed",
  },
  {
    images: [i, i1, i2],
    header: "Small Scarf Drawers",
    blurb: "Charming and simple set",
  },
  {
    images: [j, j1, j2],
    header: "Green and Gold",
    blurb: "Deep green with hand-drawn details and gold pull",
  },
  {
    images: [k],
    header: "Perfect Little Blue",
    blurb: "A favorite charming transformation",
  },
  {
    images: [l, l1, l2],
    header: "Desk to Academia Nighstands",
    blurb: "Splitting a desk into something new and charming",
  },
  {
    images: [m, m1, m2],
    header: "Green Woodsy Dresser",
    blurb: "A sweet combination with a combination of wood and paint",
  },
  {
    images: [n, n1, n2],
    header: "Classical Purple",
    blurb: "A two drawer table with fun stencil interest",
  },
  {
    images: [o, o1],
    header: "Black, White and Gold",
    blurb: "A tall table with a splashing gold accent",
  },
  {
    images: [p, p1, p2, p3],
    header: "Misty Jewelry Box",
    blurb:
      "A magical box to add a touch of mystery to the treasures stored inside",
  },
  {
    images: [q],
    header: "The Black Dresser",
    blurb:
      "This was the biggest challenge and transformational furniture rescue I have ever been able to complete",
  },
  {
    images: [r, r1, r2],
    header: "Gingko Art Nouveau",
    blurb: "A delicately curved wood side table with gold accent",
  },
]

export default Gallerylist
