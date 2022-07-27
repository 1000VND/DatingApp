import { ToastrService } from 'ngx-toastr'
import { MembersService } from 'src/app/_services/members.service'
import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Member } from 'src/app/_models/member'
import { AccountService } from 'src/app/_services/account.service'

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member
  constructor(
    private memberService: MembersService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {}

  addLike(member: Member) {
    this.memberService.addLike(member.userName).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs)
    })
  }
}