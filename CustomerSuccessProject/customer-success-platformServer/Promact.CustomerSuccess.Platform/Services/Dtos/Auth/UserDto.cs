﻿using Promact.CustomerSuccess.Platform.Entities.Constants;
using Volo.Abp.Application.Dtos;

namespace Promact.CustomerSuccess.Platform.Services.Dtos.Auth.Auth
{
    public class UserDto : IEntityDto<Guid>
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public RoleDto Role { get; set; }
    }
}
