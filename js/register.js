// JavaScript Document
$(function () {
			"use strict";
			$('form').bootstrapValidator({
				message: 'This value is not valid',
				feedbackIcons: {
					valid: 'glyphicon-ok glyphicon ',
					invalid: 'glyphicon-remove glyphicon ',
					validating: 'glyphicon-refresh glyphicon'
				},
				fields: {
					username: {
						validators: {
							notEmpty: {
								message: '昵称不能为空'
							}
						}
					},
					emails: {
						validators: {
							notEmpty: {
								message: '邮箱不能为空'
							},
							emailAddress: {
								message: '邮箱地址格式有误'
							}
						}
					},
					confirm_password: {
						validators: {
							notEmpty: {
								message: '确认密码不能为空'
							},
							stringLength: {
								min: 6,
								max: 10,
								message: '密码长度最少为6位，最多为10位'
							},
							identical: {
								field: 'studpw',
								message: '两次的密码不一样吖'
							},
							different: {
								field: 'studno',
								message: '为了更好的安全性，密码不能与学号一样吖'
							}
						}
					},
					password: {
						validators: {
							stringLength: {
								min: 6,
								max: 10,
								message: '密码长度最少为6位，最多为10位'
							},
							notEmpty: {
								message: '密码一定不能为空'
							},
							different: {
								field: 'studno',
								message: '为了更好的安全性，密码不能与学号一样吖'
							}
						}
					}
				}
			});
});
