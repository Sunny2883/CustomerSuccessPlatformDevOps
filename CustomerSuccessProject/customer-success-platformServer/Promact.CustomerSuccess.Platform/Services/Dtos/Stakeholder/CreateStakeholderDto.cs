﻿namespace Promact.CustomerSuccess.Platform.Services.Dtos.Stakeholder
{
    public class CreateStakeholderDto
    {
        public string Title { get; set; }
        public string Name { get; set; }
        public string Contact { get; set; }
        public Guid ProjectId { get; set; }
    }
}
